import { z } from 'zod'

export const ScheduleFormSchema = z.object({
  fullName: z.string().min(3, 'Nombre obligatorio'),
  email: z.string().email('Correo inválido'),
  phone: z.string().min(7, 'Teléfono obligatorio'),
  date: z.date({
    required_error: "Selecciona una fecha",
    invalid_type_error: "Fecha inválida",
  }),
  hour: z.string().min(1, 'Selecciona una hora'),
  minutes: z.string().min(1, 'Selecciona los minutos'),
  carBrand: z.string().min(1, 'Selecciona tu auto'),
  model: z.string().min(1, 'Modelo obligatorio'),
  year: z.coerce.number().min(1900, 'Año inválido'),
  description: z.string().min(10, 'Describe el problema'),
  termsAccepted: z
    .boolean()
    .refine(val => val === true, {
      message: 'Debes aceptar los términos y condiciones',
    }),

})
