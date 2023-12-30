import { Check } from 'lucide-react';
import React, { forwardRef, useState } from 'react';

import { Icons } from '@/assets/icons';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import type { InputProps } from './input';
import { Input } from './input';
import { Label } from './label';

interface IData {
  label: string;
  value: string;
  image?: string;
  group?: string;
}

interface SelectWithSearchProps extends InputProps {
  onValueChange?: (value: string) => void;
  data: IData[];
}

const SelectWithSearch = forwardRef<HTMLInputElement, SelectWithSearchProps>(
  ({ className, value, inputSize, label, data, onValueChange, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Label className="mb-1.5 block">{label}</Label>
            <Input
              onChange={() => null}
              label={value ? ' ' : undefined}
              value={value}
              inputSize={inputSize}
              {...props}
              className={cn(className)}
              ref={ref}
              suffix={<Icons.arrowDown />}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[var(--radix-popper-anchor-width)]">
          <Command>
            <CommandInput placeholder="Search by keyword..." />
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {data.map((x) => (
                <CommandItem
                  onSelect={() => {
                    onValueChange?.(x.value);
                    setOpen(false);
                  }}
                  key={x.value}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === x.value ? 'opacity-100' : 'opacity-0')} />
                  <div className="flex items-center space-x-2">
                    {x.image && <img src={x.image} alt="" className="h-6 w-6" />}
                    <p>{x.label}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

export default SelectWithSearch;
