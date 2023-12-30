import * as z from 'zod';

export const experienceSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;
