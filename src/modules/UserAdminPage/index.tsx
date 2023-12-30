import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useGetAllUserQuery } from '@/api/user/queries';
import type { IGetAllUserParams } from '@/api/user/type';
import SearchComponent from '@/components/SearchComponent';
// import SearchComponent from '@/components/SearchComponent';
import { Chip } from '@/components/ui/chip';
import Pagination from '@/components/ui/pagination';
// import Pagination from '@/components/ui/Pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonWrapper } from '@/components/ui/skeleton-wrapper';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { HStack, Show, VStack } from '@/components/ui/Utilities';
import type { NextPageWithLayout } from '@/types';

const UserAdminPage: NextPageWithLayout = () => {
  const defaultQuery = {
    page: 1,
    limit: 10,
    sort: 'updatedAt,DESC',
  };
  const [valueSearch, setValueSearch] = useState<string>('');
  const [filterField, setFilterField] = useState('all');
  const [paramsQuery, setParamsQuery] = useState<IGetAllUserParams>(defaultQuery);

  const { data: users, isFetching } = useGetAllUserQuery(paramsQuery, {
    onError: (error) => toast.error(error.message),
  });

  const columns = ['id', 'Ảnh', 'Tên đăng nhập', 'Email', 'Họ', 'Tên', 'Chức vụ'];

  const handlePageChange = (pageNumber: number) => {
    setParamsQuery({ ...paramsQuery, page: pageNumber });
  };
  const handleSearch = (value: string) => {
    setValueSearch(value);
  };
  const handleClearSearch = () => {
    setValueSearch('');
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
        <title>User management</title>
      </Head>
      <div>
        <HStack pos="apart">
          <h1 className="text-base font-bold lg:text-2xl">Người dùng</h1>
        </HStack>

        <HStack className="my-5" pos="apart">
          <HStack className="" spacing={16}>
            <Chip>Tổng người dùng ({users?.results.length || 0})</Chip>
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
              <Show when={!isFetching && !!users?.results}>
                {users?.results?.map((user, index) => (
                  <TableRow key={index} className="bg-white">
                    <TableCell className="text-center">{(users.page - 1) * 10 + index + 1}</TableCell>
                    <TableCell className="text-center">{user.id}</TableCell>

                    <TableCell className="text-center">a</TableCell>
                    <TableCell className="text-center">{user.email}</TableCell>
                    <TableCell className="text-center">
                      <VStack spacing={4}>
                        {/* <span className="text-sm font-medium">
                          {user?.updatedAt ? format(+user.updatedAt, 'dd-MM-yyyy') : 'N/A'}
                        </span>

                        <span className="text-xs">{user?.updatedAt ? format(+user.updatedAt, 'HH:mm:ss') : 'N/A'}</span> */}
                      </VStack>
                    </TableCell>
                  </TableRow>
                ))}
              </Show>
            </TableBody>
          </Table>

          {!isFetching && (!users?.results || users?.count === 0) && (
            <div className="mt-6 text-center">0 records on the system!!</div>
          )}

          <VStack spacing={4}>
            {Array.from({ length: 4 }, (_, index) => (
              <SkeletonWrapper loading={isFetching} className="h-16 w-full" key={index}>
                <Skeleton />
              </SkeletonWrapper>
            ))}
          </VStack>
        </div>

        <div className="mt-2">
          <Pagination
            onPageChange={handlePageChange}
            totalCount={users?.total || 0}
            currentPage={users?.page || 0}
            pageSize={paramsQuery?.limit || 10}
          />
        </div>
      </div>
    </>
  );
};

export default UserAdminPage;
