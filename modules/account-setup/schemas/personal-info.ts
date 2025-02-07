import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  street: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  gender: z.string().min(1, { message: 'Gender is required' }),
  dateOfBirth: z.date(),
});

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;
