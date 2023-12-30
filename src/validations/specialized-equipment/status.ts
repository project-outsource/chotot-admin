import * as z from 'zod';

export const specialStatusSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type SpecialStatusSchema = z.infer<typeof specialStatusSchema>;
