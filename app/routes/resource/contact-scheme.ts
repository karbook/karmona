import { z } from 'zod'
import { t } from '@/localization/utils'

export const ScheduleFormSchema = z.object({
  fullName: z.string().min(3, t('Full name is required')),
  email: z.string().email(t('Invalid email')),
  phone: z.string().min(10, t('Phone number is required')),
  date: z.date({
    required_error: t('Please select a date'),
    invalid_type_error: t('Invalid date'),
  }),
  hour: z.string().min(1, t('Please select an hour')),
  minutes: z.string().min(1, t('Please select the minutes')),
  carBrand: z.string().min(1, t('Please select your car brand')),
  model: z.string().min(1, t('Car model is required')),
  year: z.coerce.number().min(1900, t('Invalid year')),
  description: z.string().min(10, t('Please describe the issue or request')),
  termsAccepted: z
    .boolean()
    .refine(val => val === true, {
      message: t('You must accept the terms and conditions'),
    }),
})
