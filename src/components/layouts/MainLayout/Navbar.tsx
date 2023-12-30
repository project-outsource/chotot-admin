import { useRouter } from 'next/router';

import { HStack } from '@/components/ui/Utilities';

const Navbar = () => {
  const router = useRouter();

  return <HStack spacing={16}></HStack>;
};

export default Navbar;
