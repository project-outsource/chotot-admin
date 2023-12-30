import * as z from 'zod';

export const jobTypeSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type JobTypeSchema = z.infer<typeof jobTypeSchema>;
