import * as z from 'zod';

export const careerSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type CareerSchema = z.infer<typeof careerSchema>;
