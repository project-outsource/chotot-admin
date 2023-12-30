import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <footer className="min-h-footer pt-4">
        <Separator />
        <div className="container py-6">
          <p className="text-center text-sm italic">Chợ tốt admin @ 2023, all rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
