import type { HTMLAttributes } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
}

const Overlay = ({ visible, className, ...props }: Props) => {
  if (!visible) return null;
  return <div className={cn('bg-background/20 fixed inset-0 z-40 backdrop-blur-lg', className)} {...props} />;
};

export default Overlay;
