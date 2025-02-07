import { z } from 'zod';

export const managePasswordSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type ManagePasswordSchema = z.infer<typeof managePasswordSchema>;
