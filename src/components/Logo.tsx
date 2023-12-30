import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {}

const Logo = ({ className, ...props }: Props) => {
  return (
    <Image
      width={100}
      height={50}
      {...props}
      className={cn('h-11 w-auto', className)}
      priority
      alt="logo"
      src="/images/logo.png"
    />
  );
};

export default Logo;
