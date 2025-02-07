import { z } from 'zod';

export const doctorConsultationValidation = z.object({
  language: z.enum(['English', 'French'], {
    message: 'Please select a language',
  }),
  appointment_date: z.date({
    message: 'Please select an appointment date',
  }),
  appointment_time: z.date({
    message: 'Please select an appointment time',
  }),
});

export type DoctorConsultationValidation = z.infer<typeof doctorConsultationValidation>;
