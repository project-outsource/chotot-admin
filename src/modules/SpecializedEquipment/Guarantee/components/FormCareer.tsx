import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useNewSpecialGuarantee, useUpdateSpecialGuarantee } from '@/api/specialiSao-equipment/guarantee/mutations';
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
const FormCareer = ({ mode, setIsOpen, defaultValues }: FormUserProp) => {
  const form = useForm<CareerSchema>({
    defaultValues: {
      Name: '',
    },
    resolver: zodResolver(careerSchema),
  });

  const { mutate: createCareerMutate, isLoading: isLoadingCreate } = useNewSpecialGuarantee();
  const { mutate: updateCareerMutate, isLoading: isLoadingUpdate } = useUpdateSpecialGuarantee();
  const queryClient = useQueryClient();

  const handleSubmit = (values: CareerSchema) => {
    if (mode === 'create') {
      createCareerMutate(values, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['SpecialGuarantee'] });
          toast.success('Tạo thông tin bảo hành thành công !');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(`Create fail ${error.message}`);
        },
      });
    }
    if (mode === 'edit') {
      if (!defaultValues || !defaultValues?.id) return;
      updateCareerMutate(
        { specialGuaranteeId: +defaultValues.id, specialGuarantee: values },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['SpecialGuarantee'] });
            toast.success('Chỉnh sửa thông tin bảo hành thành công !');
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
      <h3 className="text-main-50 mb-6 text-center text-xl font-bold">Tạo mới thông tin bảo hành của hệ thống</h3>
      <FormWrapper form={form} onSubmit={handleSubmit}>
        <VStack spacing={24}>
          <div className="flex-1">
            <TextField
              control={form.control}
              required
              fullWidth
              name="Name"
              label="Tên thông tin bảo hành"
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

export default memo(FormCareer);
