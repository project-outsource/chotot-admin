import * as z from 'zod';

export const houseAppGuaranteeSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppGuaranteeSchema = z.infer<typeof houseAppGuaranteeSchema>;
