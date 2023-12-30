import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useNewHouseCategory, useUpdateHouseCategory } from '@/api/house/category/mutations';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import { type CareerSchema, careerSchema } from '@/validations/job/career';

type FormUserProp = {
  mode: 'create' | 'edit';
  setIsOpen: React.Dispatch<boolean>;
  defaultValues?: CareerSchema;
};
const FormCategory = ({ mode, setIsOpen, defaultValues }: FormUserProp) => {
  const form = useForm<CareerSchema>({
    defaultValues: {
      Name: '',
    },
    resolver: zodResolver(careerSchema),
  });

  const { mutate: createHouseCategory, isLoading: isLoadingCreate } = useNewHouseCategory();
  const { mutate: updateHouseCategory, isLoading: isLoadingUpdate } = useUpdateHouseCategory();
  const queryClient = useQueryClient();

  const handleSubmit = (values: CareerSchema) => {
    if (mode === 'create') {
      createHouseCategory(values, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['house-category'] });
          toast.success('Tạo danh mục thành công !');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(`Create fail ${error.message}`);
        },
      });
    }
    if (mode === 'edit') {
      console.log(values);
      if (!defaultValues || !defaultValues?.id) return;
      updateHouseCategory(
        { houseCategoryId: +defaultValues.id, houseCategory: values },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['house-category'] });
            toast.success('Chỉnh sửa danh mục thành công !');
            setIsOpen(false);
          },
          onError: (error) => {
            toast.error(`Update fail ${error.message}`);
          },
        }
      );
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    form.reset();
  };

  useEffect(() => {
    if (!defaultValues && mode === 'create') return;
    form.reset(defaultValues);
  }, [defaultValues, form]);

  return (
    <div>
      <h3 className="text-main-50 mb-6 text-center text-xl font-bold">Tạo mới danh mục của hệ thống</h3>
      <FormWrapper form={form} onSubmit={handleSubmit}>
        <VStack spacing={24}>
          <div className="flex-1">
            <TextField
              control={form.control}
              required
              fullWidth
              name="Name"
              label="Tên danh mục"
              placeholder="Vui lòng nhập tên.."
            />
          </div>
        </VStack>

        <DialogFooter className="mt-4">
          <HStack spacing={16}>
            <Button className="h-10 bg-red-500" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              loading={isLoadingCreate || isLoadingUpdate}
              type="submit"
              className="bg-main-button h-10"
              onClick={() => form.trigger()}
            >
              Save
            </Button>
          </HStack>
        </DialogFooter>
      </FormWrapper>
    </div>
  );
};

export default memo(FormCategory);
