import * as z from 'zod';

export const houseAppMassSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppMassSchema = z.infer<typeof houseAppMassSchema>;
