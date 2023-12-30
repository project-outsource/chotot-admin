import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import type { NextPageWithLayout } from '@/types';
import { ROUTE } from '@/types';

const _404: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6 py-12">
        <div>
          <p className="text-main-100 text-base font-semibold">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">We can’t find that page</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mt-6 flex items-center gap-x-3">
            <Button rounded="sm" onClick={router.back}>
              <Icons.chevronLeft />
              <span>Go back</span>
            </Button>
            <Button rounded="sm" variant="secondary" asChild>
              <Link href={ROUTE.HOME}>Take me home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _404;

_404.getLayout = (page) => <>{page}</>;
