import * as z from 'zod';

export const houseAppVolumeSchema = z.object({
  id: z.string().optional(),
  Name: z.string({ required_error: 'Vui lòng nhập tên' }).nonempty(),
});

export type HouseAppVolumeSchema = z.infer<typeof houseAppVolumeSchema>;
