import * as z from 'zod';

export const locationSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type LocationSchema = z.infer<typeof locationSchema>;
