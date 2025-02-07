import { z } from 'zod';

export const medicalHistorySchema = z.object({
  medical_condition: z.string().min(1, { message: 'Medical condition is required' }),
  family_history: z.string().min(1, { message: 'Family history is required' }),
  diagnosis: z.array(z.string()).optional(),
  alergies: z.array(z.string()).optional(),
  has_disability: z.enum(['yes', 'no']).optional(),
  has_reaction_to_medication: z.enum(['yes', 'no']).optional(),
});

export type MedicalHistorySchema = z.infer<typeof medicalHistorySchema>;
