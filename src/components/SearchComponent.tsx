import React, { useEffect, useState } from 'react';

import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';

import type { InputProps } from './ui/input';
import { Input } from './ui/input';
import { HStack } from './ui/Utilities';

type SearchComponentProps = {
  value?: string;
  valueSearch?: string;
  isFetching?: boolean;
  onClearSearch?: () => void;
  onSearch?: (value: string) => void;
} & InputProps;

const SearchComponent = React.forwardRef<HTMLInputElement, SearchComponentProps>(
  ({ isFetching, onClearSearch, onSearch, placeholder, className, valueSearch: valueDebounce, ...props }, ref) => {
    const [valueSearch, setValueSearch] = useState<string>('');
    const [isSearch, setIsSearch] = useState<boolean>(false);

    const handleClearSearch = () => {
      setValueSearch('');
      setIsSearch(false);
      if (onClearSearch) onClearSearch();
    };

    const handleSearch = () => {
      setIsSearch(true);
      if (onSearch) onSearch(valueSearch);
    };

    const handleKeyPress = (e: any) => {
      if (e.key === 'Enter') {
        setIsSearch(true);
        if (onSearch) onSearch(valueSearch);
      }
    };
    useEffect(() => {
      if (!valueSearch) {
        setIsSearch(false);
        if (onSearch) onSearch('');
      }
    }, [valueSearch, onSearch]);

    useEffect(() => {
      if (!valueDebounce) {
        handleClearSearch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueDebounce]);

    return (
      <div className="relative w-[330px] md:w-[420px]">
        <Input
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          ref={ref}
          variant="filled"
          inputSize="sm"
          className={cn('h-10 w-full rounded-md pr-16', className)}
          autoComplete="off"
          placeholder={`Tìm kiếm theo ${placeholder}...`}
          {...props}
          onKeyPress={handleKeyPress}
        />
        {isSearch && !isFetching && (
          <span className="absolute right-[52px] top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80">
            <Icons.close onClick={handleClearSearch} className="text-white" />
          </span>
        )}
        <HStack
          className="bg-main-button absolute bottom-0 right-0 top-0 w-12 cursor-pointer rounded-br-md rounded-tr-md"
          pos="center"
        >
          {!isFetching && (
            <span className="flex h-full w-full" onClick={handleSearch}>
              <Icons.search fill="#fff" className="m-auto" />
            </span>
          )}
          {isSearch && isFetching && <Icons.spinner className="animate-spin text-white" />}
        </HStack>
      </div>
    );
  }
);

export default SearchComponent;
