import * as z from 'zod';

export const houseAppStatusSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppStatusSchema = z.infer<typeof houseAppStatusSchema>;
