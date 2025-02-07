import { z } from 'zod';

export const lifestyleSchema = z.object({
  isSmoker: z.enum(['yes', 'no']).optional(),
  smokeCount: z.string().regex(/^\d+$/).optional(),
  isDrinker: z.enum(['yes', 'no']).optional(),
  drinkCount: z.string().regex(/^\d+$/).optional(),
  isDrugUser: z.enum(['yes', 'no']).optional(),
  drugUseFrequency: z.string().optional(),
  doesExercise: z.enum(['yes', 'no']).optional(),
});

export type LifestyleFormData = z.infer<typeof lifestyleSchema>;
