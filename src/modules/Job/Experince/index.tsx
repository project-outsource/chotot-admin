import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useDeleteExperience } from '@/api/job/experince/mutations';
import { useGetAllExperienceQuery } from '@/api/job/experince/queries';
import type { IGetAllUserParams } from '@/api/user/type';
import { Icons } from '@/assets/icons';
import SearchComponent from '@/components/SearchComponent';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
// import SearchComponent from '@/components/SearchComponent';
import { Chip } from '@/components/ui/chip';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import Pagination from '@/components/ui/Pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonWrapper } from '@/components/ui/skeleton-wrapper';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { HStack, Show, VStack } from '@/components/ui/Utilities';
import type { NextPageWithLayout } from '@/types';

import FormCareer from './components/FormCareer';
import UpdateCareer from './components/UpdateCareer';

const CareerAdminPage: NextPageWithLayout = () => {
  const defaultQuery = {
    page: 1,
    limit: 10,
    sort: 'updatedAt,DESC',
  };
  const [isModalCreate, setIsModalCreate] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [filterField, setFilterField] = useState('all');
  const [paramsQuery, setParamsQuery] = useState<IGetAllUserParams>(defaultQuery);

  const {
    data: careers,
    isFetching,
    refetch,
  } = useGetAllExperienceQuery(paramsQuery, {
    onError: (error) => toast.error(error.message),
  });
  const { mutate: deleCareer } = useDeleteExperience();

  const columns = ['#', 'id', 'Tên kinh nghiệm', 'Link', 'Hành động'];

  const handlePageChange = (pageNumber: number) => {
    setParamsQuery({ ...paramsQuery, page: pageNumber });
  };
  const handleSearch = (value: string) => {
    setValueSearch(value);
  };
  const handleClearSearch = () => {
    setValueSearch('');
  };

  const handleDelete = (id: number) => {
    deleCareer(id, {
      onSuccess: () => {
        refetch();
        toast.success('Xóa kinh nghiệm thành công !');
      },
      onError: (error) => {
        toast.error(`Xóa bị lỗi ${error.message}`);
      },
    });
  };

  useEffect(() => {
    if (valueSearch && filterField !== 'all') {
      setParamsQuery({
        ...paramsQuery,
        page: 1,
        owner: valueSearch,
        sort: filterField,
      });
      return;
    }

    if (valueSearch) {
      setParamsQuery({ ...paramsQuery, page: 1, owner: valueSearch });
      return;
    }
    if (filterField !== 'all') {
      setParamsQuery({ ...paramsQuery, sort: filterField, owner: '' });
      return;
    }

    setParamsQuery(defaultQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSearch, filterField]);

  return (
    <>
      <Head>
        <title>Career management</title>
      </Head>
      <div>
        <HStack pos="apart">
          <h1 className="text-base font-bold lg:text-2xl">Các kinh nghiệm của hệ thống</h1>
          <Dialog open={isModalCreate} onOpenChange={setIsModalCreate}>
            <DialogTrigger asChild>
              <Button className="bg-main-button" size="md" rounded="full">
                <Icons.plus className="mr-1" width="22" />
                Tạo mới
              </Button>
            </DialogTrigger>

            <DialogContent className="border-main-40 w-full max-w-[680px]">
              <FormCareer setIsOpen={setIsModalCreate} mode="create" />
            </DialogContent>
          </Dialog>
        </HStack>

        <HStack className="my-5" pos="apart">
          <HStack className="" spacing={16}>
            <Chip>Tổng kinh nghiệm ({careers?.length || 0})</Chip>
          </HStack>

          <HStack noWrap className="" spacing={24}>
            <Select value={filterField} onValueChange={(value) => setFilterField(value)}>
              <SelectTrigger className="h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Sort By</SelectItem>
                <SelectItem value="updatedAt,DESC">UpdatedAt - DESC</SelectItem>
                <SelectItem value="updatedAt,ASC">UpdatedAt - ASC</SelectItem>
                <SelectItem value="totalSpent,DESC">Total spent - DESC</SelectItem>
                <SelectItem value="totalSpent,ASC">Total spent - ASC</SelectItem>
              </SelectContent>
            </Select>

            <SearchComponent
              onSearch={handleSearch}
              isFetching={isFetching}
              placeholder="tên"
              onClearSearch={handleClearSearch}
            />
          </HStack>
        </HStack>

        <div className="min-h-[200px]">
          <Table>
            <TableHeader className="rounded-xl bg-black text-white">
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell className="border text-center" key={index}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              <Show when={!isFetching && !!careers}>
                {careers?.map((career, index) => (
                  <TableRow key={index} className="bg-white">
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell className="text-center">{career.id}</TableCell>

                    <TableCell className="text-center">{career.Name}</TableCell>
                    <TableCell className="text-center">{career.Url}</TableCell>
                    <TableCell className="text-center">
                      <HStack noWrap pos="center" spacing={16}>
                        <UpdateCareer id={career.id} />

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="h-8" variant="destructive">
                              <Icons.trash fill="white" className="mr-1 h-5 w-5" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogTitle>WARNING</AlertDialogTitle>
                            <AlertDialogDescription>Bạn muốn xóa chứ ?</AlertDialogDescription>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="h-10">Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-main-button h-10"
                                onClick={() => handleDelete(career.id)}
                              >
                                Ok
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </HStack>
                    </TableCell>
                  </TableRow>
                ))}
              </Show>
            </TableBody>
          </Table>

          {!isFetching && !careers && <div className="mt-6 text-center">0 records on the system!!</div>}

          <VStack spacing={4}>
            {Array.from({ length: 4 }, (_, index) => (
              <SkeletonWrapper loading={isFetching} className="h-16 w-full" key={index}>
                <Skeleton />
              </SkeletonWrapper>
            ))}
          </VStack>
        </div>

        {/* <div className="mt-2">
          <Pagination
            onPageChange={handlePageChange}
            totalCount={careers?.total || 0}
            currentPage={careers?.page || 0}
            pageSize={paramsQuery?.limit || 10}
          />
        </div> */}
      </div>
    </>
  );
};

export default CareerAdminPage;
