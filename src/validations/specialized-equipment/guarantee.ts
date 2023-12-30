import * as z from 'zod';

export const specialGuaranteeSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type SpecialGuaranteeSchema = z.infer<typeof specialGuaranteeSchema>;
