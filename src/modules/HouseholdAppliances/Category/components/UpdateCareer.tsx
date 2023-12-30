import React, { useState } from 'react';

import { useGetHouseAppCategoryById } from '@/api/household-appliances/category/queries';
import { Icons } from '@/assets/icons';
import FullScreenLoading from '@/components/FullScreenLoading';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import FormCareer from './FormCareer';

type UpdateCareerProps = {
  id: number;
};

const UpdateCareer = ({ id }: UpdateCareerProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isFetching } = useGetHouseAppCategoryById(id, { enabled: isModalOpen });

  const formValue = {
    id: `${data?.id}`,
    Name: data?.Name as string,
  };

  return (
    <div>
      <FullScreenLoading loading={isFetching} />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button className="h-8 min-w-[110px]" variant="terq" onClick={() => setIsModalOpen(true)}>
            <Icons.edit fill="white" className="mr-1 h-5 w-5" />
            Chỉnh sửa
          </Button>
        </DialogTrigger>

        <DialogContent className="border-main-40 w-full max-w-[680px]">
          <FormCareer setIsOpen={setIsModalOpen} defaultValues={formValue} mode="edit" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateCareer;
