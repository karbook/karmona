// components/ScheduleForm.tsx
"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScheduleFormSchema } from "@/routes/resource/contact-scheme";
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
  Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import type { MetaFunction } from 'react-router';
import type { Route } from '@/rr/features/marketing/home/routes/+types/index';
import { remixI18Next } from '@/localization/i18n.server';
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export async function loader({ request }: Route.LoaderArgs) {
  const t = await remixI18Next.getFixedT(request);
  const title = t("Karmona");
  return { meta: { title } };
}

type ScheduleFormValues = z.infer<typeof ScheduleFormSchema>;

const carOptions = ["Acura", "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Cupra", "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Mazda", "Mercedez Benz", "Nissan", "Peugeot", "Porsche", "Ram", "Renault", "Seat", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Otro"];
const hourOptions = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const minuteOptions = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

const glowColor = "rgba(12, 142, 244, 0.25)";

const generalFormFieldsConfig = [
  { name: "fullName", label: "Nombre Completo", icon: "user", type: "input", inputType: "text", placeholder: "Nombre Completo" },
  { name: "email", label: "Correo Electrónico", icon: "mail", type: "input", inputType: "email", placeholder: "Correo Electrónico" },
  { name: "phone", label: "Teléfono", icon: "phone", type: "input", inputType: "tel", placeholder: "Teléfono" },
  { name: "date", label: "Fecha Estimada", icon: "calendar", type: "datePicker" },
  { name: "hour", label: "Hora", icon: "clock", type: "select", placeholder: "Seleccionar Hora", options: hourOptions.map((h) => ({ value: h, label: `${h} hrs` })), selectLabel: "Hora Estimada", wrapperClasses: "space-y-1 sm:space-y-2 mt-4 sm:mt-5 mb-4 sm:mb-10" },
  { name: "minutes", label: "Minutos", icon: "clock", type: "select", placeholder: "Seleccionar Minutos", options: minuteOptions.map((m) => ({ value: m, label: `${m} min` })), selectLabel: "Minutos Estimados", wrapperClasses: "space-y-1 sm:space-y-2 mt-4 sm:mt-5 mb-4 sm:mb-10" },
  { name: "carBrand", label: "Marca del Auto", icon: "car-front", type: "select", placeholder: "Seleccionar Marca", options: carOptions.map((brand) => ({ value: brand, label: brand })), selectLabel: "Si no encuentra la marca de su auto,\n seleccione \"otro\"" },
  { name: "model", label: "Modelo del Auto", icon: "car", type: "input", inputType: "text", placeholder: "Modelo del Auto" },
  { name: "year", label: "Año del Auto", icon: "calendar", type: "input", inputType: "text", placeholder: "Año del Auto" },
];

const descriptionFieldConfig = {
  name: "description",
  label: "Descripción del problema",
  icon: "info",
  type: "textarea",
  placeholder: "Describe el problema o servicio que necesitas...",
  rows: 4,
};

interface ActionResponse {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export default function ScheduleForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<ScheduleFormValues>({
    resolver: zodResolver(ScheduleFormSchema),
    defaultValues: {
      fullName: "", email: "", phone: "", hour: "", minutes: "", date: new Date(),
      carBrand: "", model: "", year: undefined, description: "", termsAccepted: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);


  const onSubmit = async (data: ScheduleFormValues) => {
    setIsSubmitting(true);
    setFormMessage(null);
    clearErrors();
    try {
      const formData = new FormData();
      for (const key in data) {
        const value = data[key as keyof ScheduleFormValues];
        if (value !== undefined && value !== null) {
          if (value instanceof Date) {
            formData.append(key, value.toISOString());
          } else if (typeof value === 'boolean') {
            formData.append(key, String(value));
          } else {
            formData.append(key, String(value));
          }
        }
      }
      const response = await fetch("/r/send-email", {
        method: "POST",
        body: formData,
      });
      const result = await response.json() as ActionResponse;

      if (response.ok) {
        setFormMessage({ type: 'success', text: result.message || 'Cita agendada con éxito.' });
        reset();
        clearErrors();
      } else {
        if (result.errors) {
          for (const key in result.errors) {
            setError(key as keyof ScheduleFormValues, { message: result.errors[key] });
          }
          setFormMessage({ type: 'error', text: result.message || 'Errores de validación en el formulario.' });
        } else {
          setFormMessage({ type: 'error', text: result.message || 'Ocurrió un error al agendar la cita.' });
        }
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormMessage({ type: 'error', text: 'Hubo un problema de conexión. Por favor, inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsActive(true);
  };

  const handleMouseLeave = () => { setIsActive(false); };

  return (
    <form
      className="relative space-y-6 sm:space-y-8 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16
                   bg-transparent rounded-xl shadow-lg transition-shadow duration-300
                   border border-gray-300 dark:border-gray-700 overflow-hidden mt-10 mb-10 sm:mt-20 sm:mb-20"
      onSubmit={handleSubmit(onSubmit)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            filter: "blur(50px)",
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px,
                ${glowColor} 10%, transparent 50%)`,
          }}
        />
      )}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center relative z-10">Agendar Cita</h2>
      <p className="font-medium text-base sm:text-lg md:text-3xl text-gray-600 dark:text-[#a0b2bf] relative z-10 max-w-6xl text-center mx-auto px-2">
        Es importante destacar que esta fecha es tentativa y requerirá confirmación por parte de nuestro equipo. Estamos en el proceso de revisar nuestra agenda y coordinar los detalles necesarios para brindarle el mejor servicio posible.
        <br />(Esta Cita será enviada vía email y WhatsApp)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10 px-4 sm:px-6 md:px-20 lg:px-40">
        {generalFormFieldsConfig.map((field) => (
          <div key={field.name} className={`${field.wrapperClasses || 'space-y-1 sm:space-y-2 mb-4 sm:mb-10'}`}>
            <Label htmlFor={field.name} className="text-lg sm:text-xl md:text-3xl font-semibold flex items-center gap-2">
              {field.label}
              {field.icon && <Icon name={field.icon as any} size="lg" className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Label>
            {field.type === "input" && (
              <Input
                id={field.name}
                {...register(field.name as keyof ScheduleFormValues, { valueAsNumber: field.inputType === "number" })}
                placeholder={field.placeholder}
                type={field.inputType}
                className="w-full bg-transparent h-10 sm:h-12 text-base sm:text-lg md:text-3xl font-semibold"
              />
            )}
            {field.type === "select" && (
              <Controller
                control={control}
                name={field.name as keyof ScheduleFormValues}
                render={({ field: controllerField }) => (
                  <Select onValueChange={controllerField.onChange} value={controllerField.value as string}>
                    <SelectTrigger id={field.name} className="w-full h-10 sm:h-12 text-base sm:text-lg md:text-3xl font-semibold">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent className="max-h-52 sm:max-h-60 overflow-y-auto">
                      <SelectGroup>
                        {field.selectLabel && (
                          <SelectLabel className="text-black dark:text-white text-sm sm:text-md px-3 py-1 ml-2 sm:ml-5 whitespace-pre-line">
                            {field.selectLabel}
                          </SelectLabel>
                        )}
                        {field.options && field.options.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="text-base sm:text-lg">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            )}
            {field.type === "datePicker" && (
              <Controller
                control={control}
                name={field.name as "date"}
                render={({ field: controllerField }) => (
                  <DatePickerDemo
                    value={controllerField.value instanceof Date ? controllerField.value : undefined}
                    onChange={(date) => controllerField.onChange(date || undefined)}
                    error={errors[field.name as keyof ScheduleFormValues]?.message as string}
                    label={field.label}
                  />
                )}
              />
            )}
            {errors[field.name as keyof ScheduleFormValues] && (
              <p className="mt-2 px-3 py-2 rounded-md border border-red-500 bg-red-50 dark:bg-red-900/30 text-base sm:text-lg font-medium text-red-700 dark:text-red-300 max-w-xl">
                {(errors[field.name as keyof ScheduleFormValues] as any)?.message}
              </p>

            )}
          </div>
        ))}
      </div>
      <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-10 relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <Label htmlFor={descriptionFieldConfig.name} className="text-lg sm:text-xl md:text-3xl font-semibold flex items-center gap-2">
          {descriptionFieldConfig.label}
          {descriptionFieldConfig.icon && <Icon name={descriptionFieldConfig.icon as any} size="lg" className="w-5 h-5 sm:w-6 h-6" />}
        </Label>
        <Textarea
          id={descriptionFieldConfig.name}
          placeholder={descriptionFieldConfig.placeholder}
          {...register(descriptionFieldConfig.name as keyof ScheduleFormValues)}
          className="w-full h-24 sm:h-32 text-base sm:text-lg font-semibold placeholder:text-sm sm:placeholder:text-lg"
          rows={descriptionFieldConfig.rows}
        />
        {errors.description && (
          <p className="mt-2 px-3 py-2 rounded-md border border-red-500 bg-red-50 dark:bg-red-950 text-sm sm:text-base font-medium text-red-700 dark:text-red-300 max-w-xl">
            {errors.description.message}
          </p>
        )}

      </div>
      <div className="flex justify-center px-4 sm:px-6">
        <div className="flex items-start gap-2 max-w-5xl w-full mx-auto text-center text-gray-600 dark:text-gray-400 relative z-10 mt-6 sm:mt-10">
          <Controller
            control={control}
            name="termsAccepted"
            render={({ field }) => (
              <Checkbox
                id="termsAccepted"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="w-6 h-6 sm:w-8 sm:h-8 mt-1 flex-shrink-0"
              />
            )}
          />
          <div className="flex-1 text-sm sm:text-base md:text-2xl font-semibold leading-tight sm:leading-snug text-center">
            Al hacer click en "Agendar cita", aceptas nuestras{" "}
            <a href="/privacy" className="inline-block underline text-blue-600 dark:text-blue-400">
              Políticas de Privacidad
            </a>{" "}
            y nuestros{" "}
            <a href="/tos" className="inline-block underline text-blue-600 dark:text-blue-400">
              Términos y Condiciones
            </a>.
          </div>
        </div>
      </div>

      {formMessage?.type !== 'success' && errors.termsAccepted && (
        <p className="mt-3 px-3 py-2 rounded-md border border-red-500 bg-red-50 dark:bg-red-900/30 text-center text-sm sm:text-base font-medium text-red-700 dark:text-red-300 max-w-2xl mx-auto">
          {errors.termsAccepted.message}
        </p>
      )}

      {formMessage?.type === 'success' && (
        <div className="mt-4 rounded-md border border-green-500 bg-green-50 dark:bg-green-900/20 px-4 py-3 text-center text-sm sm:text-base font-semibold text-green-700 dark:text-green-300 max-w-xl mx-auto">
          {formMessage.text}
        </div>
      )}


      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Button
          type="submit"
          variant="schedule"
          className="w-full py-3 sm:py-4 md:py-5 font-semibold text-lg sm:text-xl md:text-3xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Agendando...' : 'Agendar Cita'}
        </Button>
      </div>
    </form>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.meta.title }];
};