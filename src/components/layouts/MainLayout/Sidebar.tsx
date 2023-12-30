import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { menuConfigs } from '@/components/lib/menu';
import Overlay from '@/components/ui/Overlay';
import { HStack, Show, VStack } from '@/components/ui/Utilities';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores';
import type { FCC } from '@/types';

interface Props {
  icon?: any;
  children?: any;
  name?: string;
  link?: any;
}

const MenuLink: FCC<any> = ({ icon, children, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <VStack
      className={cn(
        'text-main-60 hover:shadow-active w-full cursor-pointer justify-start gap-4 rounded-md p-2 text-sm transition-all duration-150 active:scale-100'
      )}
    >
      <HStack spacing={8} pos="apart" onClick={() => setIsOpen(!isOpen)}>
        <HStack className="flex-1" spacing={8}>
          <div className="bg-main-60 shadow-card rounded-sm p-2 text-white">
            <span>{icon}</span>
          </div>
          <p className="line-clamp-1 flex-1">{name}</p>
        </HStack>
        <span>{!isOpen ? <ChevronRight /> : <ChevronDown />}</span>
      </HStack>

      <Show when={!!children && !!isOpen}>
        <VStack className="">
          {children?.map((child: any, index: number) => (
            <Link
              key={index}
              href={child.link}
              className={cn('hover:bg-main-40 text-main-50 hover:shadow-active ml-3 rounded-sm px-2 py-1 text-left', {
                'shadow-active border bg-[#FFBA00]': router.pathname === child.link,
              })}
            >
              {child.name}
            </Link>
          ))}
        </VStack>
      </Show>
    </VStack>
  );
};
const Sidebar = () => {
  const open = useAppStore.use.openSideBar();
  const toggle = useAppStore.use.toggleSidebar();

  return (
    <>
      <aside
        className={cn(
          'max-w-sidebar bg-card fixed left-0 top-[var(--header-h)] z-50 h-full max-h-[calc(100vh_-_80px)] w-full overflow-clip overflow-y-auto border-r px-4 pt-4 transition-all',
          {
            '-left-[var(--sidebar-w)] md:left-0': !open,
          }
        )}
      >
        <VStack spacing={8}>
          {menuConfigs.map((menu, index) => (
            <MenuLink key={index} {...menu} icon={<span className="h-4 w-4">{menu.icon}</span>}></MenuLink>
          ))}
        </VStack>
      </aside>
      <Overlay visible={open} onClick={toggle} />
    </>
  );
};

export default Sidebar;
