import * as z from 'zod';

export const locationAddressSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
  Name_en: z.string({ required_error: 'Vui lòng nhập tên quốc tế' }).nonempty(),
  Location: z.string({ required_error: 'Vui lòng chọn khu vực' }).nonempty(),
});

export type LocationAddressSchema = z.infer<typeof locationAddressSchema>;
