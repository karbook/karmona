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
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { formVariants, fadeIn, cardVariants } from "@/components/ui/card-animation";

export async function loader({ request }: Route.LoaderArgs) {
  const t = await remixI18Next.getFixedT(request);
  const title = t("Karmona");
  return { meta: { title } };
}
export default function ScheduleForm() {
  const { t } = useTranslation();
  type ScheduleFormValues = z.infer<typeof ScheduleFormSchema>;
  const glowColor = "rgba(12, 142, 244, 0.25)";

  const carOptions = ["Acura", "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Cupra", "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Mazda", "Mercedez Benz", "Nissan", "Peugeot", "Porsche", "Ram", "Renault", "Seat", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Otro"];
  const hourOptions = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const minuteOptions = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  interface ActionResponse {
    success?: boolean;
    message?: string;
    errors?: Record<string, string>;
  }

  const generalFormFieldsConfig = [
    { name: "fullName", label: t("Full Name"), icon: "user", type: "input", inputType: "text", placeholder: t("Full Name") },
    { name: "email", label: t("Email"), icon: "mail", type: "input", inputType: "email", placeholder: t("Email") },
    { name: "phone", label: t("Phone"), icon: "phone", type: "input", inputType: "tel", placeholder: t("Phone") },
    { name: "date", label: t("Estimated Date"), icon: "calendar", type: "datePicker" },
    { name: "hour", label: t("Hour"), icon: "clock", type: "select", placeholder: t("Select Hour"), options: hourOptions.map((h) => ({ value: h, label: `${h} ${t("hrs")}` })), selectLabel: t("Estimated Hour"), wrapperClasses: "space-y-1 sm:space-y-2 mt-4 sm:mt-5 mb-4 sm:mb-10" },
    { name: "minutes", label: t("Minutes"), icon: "clock", type: "select", placeholder: t("Select Minutes"), options: minuteOptions.map((m) => ({ value: m, label: `${m} ${t("min")}` })), selectLabel: t("Estimated Minutes"), wrapperClasses: "space-y-1 sm:space-y-2 mt-4 sm:mt-5 mb-4 sm:mb-10" },
    { name: "carBrand", label: t("Car Brand"), icon: "car-front", type: "select", placeholder: t("Select Brand"), options: carOptions.map((brand) => ({ value: brand, label: brand })), selectLabel: t('If your car brand is not listed,\nselect "Other"') },
    { name: "model", label: t("Car Model"), icon: "car", type: "input", inputType: "text", placeholder: t("Car Model") },
    { name: "year", label: t("Car Year"), icon: "calendar", type: "input", inputType: "text", placeholder: t("Car Year") },
  ];

  const descriptionFieldConfig = { name: "description", label: t("Problem Description"), icon: "info", type: "textarea", placeholder: t("Describe the issue or service you need..."), rows: 4 };

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
        setFormMessage({ type: 'success', text: result.message || 'Appointment successfully scheduled.' });
        reset();
        clearErrors();
      } else {
        if (result.errors) {
          for (const key in result.errors) {
            setError(key as keyof ScheduleFormValues, { message: result.errors[key] });
          }
          setFormMessage({ type: 'error', text: result.message || 'Validation errors in the form.' });
        } else {
          setFormMessage({ type: 'error', text: result.message || 'An error occurred while scheduling the appointment.' });
        }
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setFormMessage({ type: 'error', text: 'There was a connection problem. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!isActive) setIsActive(true);
  };

  const handleMouseLeave = () => { setIsActive(false); };

  return (
    <div
      className="container min-h-screen items-center justify-center pt-10 pb-10 relative"
      id="Appointment"
    >
      <motion.form
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={formVariants}
        className="relative space-y-6 sm:space-y-8 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16
               bg-transparent rounded-xl shadow-lg border border-gray-300 dark:border-gray-700
               overflow-hidden mt-10 mb-10 sm:mt-20 sm:mb-20"
        onSubmit={handleSubmit(onSubmit)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            filter: "blur(50px)",
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor} 10%, transparent 50%)`,
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        />
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
          {t("Schedule Appointment")}
        </motion.h2>

        <motion.p variants={fadeIn} className="font-medium text-base sm:text-lg md:text-3xl text-gray-600 dark:text-[#a0b2bf] max-w-6xl text-center mx-auto px-2">
          <>
            {t("It's important to note that this date is tentative and will require confirmation from our team. We are in the process of reviewing our schedule and coordinating the necessary details to provide you with the best possible service.")}
            <br />
            {t("This appointment will be sent via email.")}
          </>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 md:px-20 lg:px-40">
          {generalFormFieldsConfig.map((field) => (
            <motion.div key={field.name} variants={fadeIn} className={field.wrapperClasses || 'space-y-1 sm:space-y-2 mb-4 sm:mb-10'}>
              <Label htmlFor={field.name} className="text-lg sm:text-xl md:text-3xl font-semibold flex items-center gap-2">
                {t(field.label)}
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
                          {field.options?.map((option) => (
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
                      label={t(field.label)}
                    />
                  )}
                />
              )}

              {errors[field.name as keyof ScheduleFormValues] && (
                <p className="mt-2 px-3 py-2 rounded-md border border-red-500 bg-red-50 dark:bg-red-900/30 text-base sm:text-lg font-medium text-red-700 dark:text-red-300 max-w-xl">
                  {(errors[field.name as keyof ScheduleFormValues] as any)?.message}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="space-y-1 sm:space-y-2 mb-4 sm:mb-10 max-w-5xl mx-auto px-4 sm:px-6">
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
        </motion.div>

        <motion.div variants={fadeIn} className="flex justify-center px-4 sm:px-6">
          <div className="flex items-start gap-2 max-w-5xl w-full mx-auto text-center text-gray-600 dark:text-gray-400 mt-6 sm:mt-10">
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
              {t('By clicking "Schedule Appointment", you agree to our')}{" "}
              <a href="/privacy" className="inline-block underline text-blue-400 dark:text-blue-400">
                {t('Privacy Policy')}
              </a>{" "}
              {t('and our')}{" "}
              <a href="/tos" className="inline-block underline text-blue-400 dark:text-blue-400">
                {t('Terms and Conditions')}
              </a>.
            </div>
          </div>
        </motion.div>

        {formMessage?.type !== 'success' && errors.termsAccepted && (
          <motion.p variants={fadeIn} className="mt-3 px-3 py-2 rounded-md border border-red-500 bg-red-50 dark:bg-red-900/30 text-center text-sm sm:text-base font-medium text-red-700 dark:text-red-300 max-w-2xl mx-auto">
            {errors.termsAccepted.message}
          </motion.p>
        )}

        {formMessage?.type === 'success' && (
          <motion.div variants={fadeIn} className="mt-4 rounded-md border border-green-500 bg-green-50 dark:bg-green-900/20 px-4 py-3 text-center text-sm sm:text-base font-semibold text-green-700 dark:text-green-300 max-w-xl mx-auto">
            {formMessage.text}
          </motion.div>
        )}

        <motion.div variants={fadeIn} className="max-w-5xl mx-auto px-4 sm:px-6">
          <Button
            type="submit"
            variant="schedule"
            className="w-full py-3 sm:py-4 md:py-5 font-semibold text-lg sm:text-xl md:text-3xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('Scheduling...') : t('Schedule Appointment')}
          </Button>
        </motion.div>
      </motion.form>
    </div>

  );
}
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.meta.title }];
};