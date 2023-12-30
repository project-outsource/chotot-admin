import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useNewLocationAddress, useUpdateLocationAddress } from '@/api/location/address/mutations';
import { useGetAllLocationQuery } from '@/api/location/area/queries';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { FormWrapper } from '@/components/ui/form';
import { SelectField, TextField } from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import type { CareerSchema } from '@/validations/job/career';
import type { LocationAddressSchema } from '@/validations/location/address';
import { locationAddressSchema } from '@/validations/location/address';

type FormUserProp = {
  mode: 'create' | 'edit';
  setIsOpen: React.Dispatch<boolean>;
  defaultValues?: CareerSchema;
};
const FormAddress = ({ mode, setIsOpen, defaultValues }: FormUserProp) => {
  const form = useForm<LocationAddressSchema>({
    defaultValues: {
      Name: '',
    },
    resolver: zodResolver(locationAddressSchema),
  });

  const { mutate: createExperienceMutate, isLoading: isLoadingCreate } = useNewLocationAddress();
  const { mutate: updateExperienceMutate, isLoading: isLoadingUpdate } = useUpdateLocationAddress();
  const { data: locations } = useGetAllLocationQuery(undefined, {
    onError: (error) => toast.error(error.message),
  });
  const queryClient = useQueryClient();

  const handleSubmit = (values: LocationAddressSchema) => {
    if (mode === 'create') {
      createExperienceMutate(values, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['LocationAddress'] });
          toast.success('Tạo địa chỉ thành công !');
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
      updateExperienceMutate(
        { locationAddressId: +defaultValues.id, locationAddress: values },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['LocationAddress'] });
            toast.success('Chỉnh sửa địa chỉ thành công !');
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
      <h3 className="text-main-50 mb-6 text-center text-xl font-bold">Tạo mới địa chỉ của hệ thống</h3>
      <FormWrapper form={form} onSubmit={handleSubmit}>
        <VStack spacing={24}>
          <div className="flex-1">
            <SelectField
              data={locations?.map((item) => ({ label: item.Name, value: `${item.id}` })) || []}
              control={form.control}
              required
              fullWidth
              name="Location"
              label="Tên địa chỉ"
            />
          </div>

          <div className="flex-1">
            <TextField
              control={form.control}
              required
              fullWidth
              name="Name"
              label="Tên địa chỉ"
              placeholder="Vui lòng nhập địa chỉ.."
            />
          </div>
          <div className="flex-1">
            <TextField
              control={form.control}
              required
              fullWidth
              name="Name_en"
              label="Tên quốc tế"
              placeholder="Vui lòng địa chỉ.."
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

export default memo(FormAddress);
