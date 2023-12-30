import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useNewPaymentType, useUpdatePaymentType } from '@/api/job/paymentType/mutations';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import { type CareerSchema, careerSchema } from '@/validations/job/career';

type FormPaymentTypeProp = {
  mode: 'create' | 'edit';
  setIsOpen: React.Dispatch<boolean>;
  defaultValues?: CareerSchema;
};
const FormPaymentType = ({ mode, setIsOpen, defaultValues }: FormPaymentTypeProp) => {
  const form = useForm<CareerSchema>({
    defaultValues: {
      Name: '',
    },
    resolver: zodResolver(careerSchema),
  });

  const { mutate: createCareerMutate, isLoading: isLoadingCreate } = useNewPaymentType();
  const { mutate: updateCareerMutate, isLoading: isLoadingUpdate } = useUpdatePaymentType();
  const queryClient = useQueryClient();

  const handleSubmit = (values: CareerSchema) => {
    if (mode === 'create') {
      createCareerMutate(values, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['career'] });
          toast.success('Tạo hình thức trả lương thành công !');
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
      updateCareerMutate(
        { paymentTypeId: +defaultValues.id, paymentType: values },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['career'] });
            toast.success('Chỉnh sửa hình thức trả lương thành công !');
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
      <h3 className="text-main-50 mb-6 text-center text-xl font-bold">Tạo mới hình thức trả lương của hệ thống</h3>
      <FormWrapper form={form} onSubmit={handleSubmit}>
        <VStack spacing={24}>
          <div className="flex-1">
            <TextField
              control={form.control}
              required
              fullWidth
              name="Name"
              label="Tên hình thức trả lương"
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
              loading={isLoadingCreate}
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

export default memo(FormPaymentType);
