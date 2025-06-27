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
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'
import { remixI18Next } from '@/localization/i18n.server'
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
export async function loader({ request }: Route.LoaderArgs) {
  const t = await remixI18Next.getFixedT(request)
  const title = t("Karmona")
  return { meta: { title } }
}
type ScheduleFormValues = z.infer<typeof ScheduleFormSchema>;
const carOptions = ["Acura", "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Cupra", "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Mazda", "Mercedez Benz", "Nissan", "Peugeot", "Porsche", "Ram", "Renault", "Seat", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Otro"];
const hourOptions = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const minuteOptions = ["0:00", "5:00", "10:00", "15:00", "20:00", "25:00", "30:00", "35:00", "40:00", "45:00", "50:00", "55:00"];

const glowColor = "rgba(12, 142, 244, 0.25)";
export default function ScheduleForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScheduleFormValues>({
    resolver: zodResolver(ScheduleFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      hour: "",
      minutes: "",
      date: new Date(),
      carBrand: "",
      model: "",
      year: undefined,
      description: "",
      termsAccepted: undefined,
    },
  });

  const onSubmit = (data: ScheduleFormValues) => {
    console.log("Formulario enviado:", data);
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };
  return (
    <form
      className="relative space-y-8 max-w-7xl mx-auto px-4 sm:px-6 py-16
                  bg-transparent rounded-xl shadow-lg transition-shadow duration-300
                  border border-gray-300 dark:border-gray-700 overflow-hidden mt-20 mb-20"

      onSubmit={handleSubmit(onSubmit)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            filter: "blur(100px)",
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px,
    ${glowColor} 10%, transparent 50%)`,
          }}

        />
      )}
      <h2 className="text-7xl font-bold text-center relative z-10">Agendar Cita</h2>
      <p className="font-medium text-3xl text-gray-600 dark:text-[#a0b2bf] relative z-10 max-w-6xl text-center align-center mx-auto">
        Es importante destacar que esta fecha es tentativa y requerirá confirmación por parte de nuestro equipo. Estamos en el proceso de revisar nuestra agenda y coordinar los detalles necesarios para brindarle el mejor servicio posible.
        <br />(Esta Cita sera enviada via email y whatsapp)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 px-40">
        <div className="space-y-2 mb-10">
          <Label htmlFor="fullName" className="text-3xl font-semibold">Nombre Completo<Icon name="user" size="2xl" /></Label>
          <Input id="fullName" {...register("fullName")} placeholder="Nombre Completo" className="w-[400px] bg-transparent h-12 text-3xl font-semibold" />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2 mb-10">
          <Label htmlFor="email" className="text-3xl font-semibold">Correo Electrónico<Icon name="mail" size="2xl" /></Label>
          <Input id="email" {...register("email")} placeholder="Correo Electronico" type="email" className="w-[400px] bg-transparent h-12 text-3xl font-semibold" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-3xl font-semibold">Teléfono<Icon name="phone" size="2xl" /></Label>
          <Input id="phone" {...register("phone")} placeholder="Telefono" className="w-[400px] bg-transparent h-12 text-3xl font-semibold" />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePickerDemo
              value={field.value instanceof Date ? field.value : undefined}
              onChange={(date) => field.onChange(date || undefined)}
              error={errors.date?.message}
              label="Fecha Estimada *"
            />
          )}
        />

        <div className="space-y-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mt-10 mb-10">
            <Label htmlFor="hour" className="text-3xl font-semibold">Hora<Icon name="clock" size="2xl" /></Label>
            <Controller
              control={control}
              name="hour"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="hour" className="w-[400px] h-12 text-3xl font-semibold">
                    <SelectValue placeholder="Seleccionar Hora" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel className="text-muted-foreground text-md px-3 py-1 ml-5">Hora Estimada</SelectLabel>
                      {hourOptions.map((h) => (
                        <SelectItem key={h} value={h}>
                          {h} hrs
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            {errors.hour && (
              <p className="text-red-500 text-sm">{errors.hour.message}</p>
            )}
          </div>

          <div className="space-y-2 mt-10 mb-10">
            <Label htmlFor="minutes" className="text-3xl font-semibold">Minutos<Icon name="clock" size="2xl" /></Label>
            <Controller
              control={control}
              name="minutes"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="minutes" className="w-[400px] h-12 text-3xl font-semibold">
                    <SelectValue placeholder="Seleccionar Minutos" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <SelectGroup>
                      <SelectLabel className="text-muted-foreground text-md px-3 py-1 ml-5">Minutos Estimados</SelectLabel>
                      {minuteOptions.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m} min
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.minutes && (
              <p className="text-red-500 text-sm">{errors.minutes.message}</p>
            )}
          </div>

        </div>
        <div className="space-y-2 mb-10">
          <Label htmlFor="carBrand" className="text-3xl font-semibold">Marca del Auto<Icon name="car-front" size="2xl" /></Label>
          <Controller
            control={control}
            name="carBrand"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="carBrand" className="w-[400px] h-22 text-3xl font-semibold">
                  <SelectValue placeholder="Seleccionar Marca" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  <SelectGroup>
                    <SelectLabel className="text-black dark:text-white text-md px-3 py-1 ml-5">si no encuentra la marca de su auto,<br />
                      seleccione "otro"</SelectLabel>
                    {carOptions.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.carBrand && (
            <p className="text-red-500 text-sm">{errors.carBrand.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="model" className="text-3xl font-semibold">Modelo del Auto <Icon name="car" size="2xl" /></Label>
          <Input id="model" {...register("model")} placeholder="Modelo del Auto" className="w-[400px] bg-transparent h-12 text-3xl font-semibold" />
          {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
        </div>

        <div className="space-y-2 mb-10">
          <Label htmlFor="year" className="text-3xl font-semibold">Año del Auto <Icon name="calendar" size="2xl" /></Label>
          <Input
            id="year"
            {...register("year")}
            placeholder="Año del Auto"
            className="w-[400px] bg-transparent h-12 text-3xl font-semibold"
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
        </div>
      </div>

      <div className="space-y-2 relative z-10 max-w-[1070px] mx-auto">
        <Label htmlFor="description" className="text-3xl font-semibold">Descripción del problema<Icon name="info" size="2xl" /></Label>
        <Textarea
          id="description"
          placeholder="Describe el problema o servicio que necesitas..."
          {...register("description")}
          className="w-full h-32 text-3xl font-semibold placeholder:text-2xl"
          rows={4}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex items-start gap-2 max-w-5xl w-full mx-auto text-center text-gray-600 dark:text-gray-400 relative z-10 mt-10">
          <Controller
            control={control}
            name="termsAccepted"
            render={({ field }) => (
              <Checkbox
                id="termsAccepted"
                checked={field.value}
                onCheckedChange={field.onChange}
                className="w-10 h-10 mt-1 flex-shrink-0"
              />
            )}
          />
          <div className="flex-1 text-2xl font-semibold leading-snug"> 
            Al hacer click en <strong>"Agendar cita"</strong>, aceptas nuestras{" "}
            <a href="/privacy" className="inline-block underline text-blue-600 dark:text-blue-400"> 
              Políticas de Privacidad
            </a>{" "}
            y nuestros{" "}
            <a href="/tos" className="inline-block underline text-blue-600 dark:text-blue-400">
              Términos y Condiciones
            </a>
            .
          </div>
        </div>
      </div>

      {errors.termsAccepted && (
        <p className="text-center text-red-500 text-sm mt-2">
          {errors.termsAccepted.message}
        </p>
      )}

      <div className="max-w-5xl mx-auto">
        <Button
          type="submit"
          variant="schedule"
          className="w-full py-5 font-semibold text-3xl"
        >
          Agendar Cita
        </Button>
      </div>

    </form>
  );
}
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.meta.title }]
}
