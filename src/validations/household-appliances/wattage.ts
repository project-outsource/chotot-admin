import * as z from 'zod';

export const houseAppWattageSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppWattageSchema = z.infer<typeof houseAppWattageSchema>;
