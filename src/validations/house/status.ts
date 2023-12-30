import * as z from 'zod';

export const houseStatusSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseStatusSchema = z.infer<typeof houseStatusSchema>;
