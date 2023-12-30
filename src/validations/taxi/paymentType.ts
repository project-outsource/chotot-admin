import * as z from 'zod';

export const paymentTypeSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type PaymentTypeSchema = z.infer<typeof paymentTypeSchema>;
