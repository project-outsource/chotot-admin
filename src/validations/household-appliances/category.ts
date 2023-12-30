import * as z from 'zod';

export const houseAppCategorySchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppCategorySchema = z.infer<typeof houseAppCategorySchema>;
