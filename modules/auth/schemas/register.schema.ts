import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email()
      .optional(),
    password: z.string().min(8, 'Password must be at least 8 characters long').optional(),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters long').optional(),
    phoneNumber: z
      .string()
      .regex(/^(0|\+234)[789][01]\d{8}$/, 'Invalid phone number')
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
