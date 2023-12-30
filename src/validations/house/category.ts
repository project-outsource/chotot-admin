import * as z from 'zod';

export const houseCategorySchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseCategorySchema = z.infer<typeof houseCategorySchema>;
