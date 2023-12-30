import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { loginRequest } from '@/api/auth/requests';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import { useAdminStore } from '@/stores';
import { ROUTE } from '@/types';
import type { AuthSchema } from '@/validations/auth';
import { authSchema } from '@/validations/auth';

const FormLogin = () => {
  const router = useRouter();
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {},
  });
  const setAccessToken = useAdminStore.use.setAccessToken();
  const setUser = useAdminStore.use.setUser();

  const { mutate: loginCredential, isLoading } = useMutation({ mutationFn: loginRequest });

  const handleSubmit: SubmitHandler<AuthSchema> = async (formData) => {
    loginCredential(
      { username: formData.email, password: formData.password },
      {
        onSuccess: ({ access }) => {
          setAccessToken(access);
          router.replace(ROUTE.HOME);
          toast.success('Đăng nhập thành công!');
        },
        onError: (err: any) => {
          console.log(err);
          toast.error(`Đăng nhập thất bại: ${err?.detail}`);
        },
      }
    );
  };

  return (
    <div className="mx-4 grid min-h-screen grid-cols-1 lg:mx-auto lg:grid-cols-2">
      <HStack pos="center" className="h-full ">
        <VStack className="w-full max-w-[450px]">
          <h1 className="mb-8 text-center text-2xl font-semibold md:text-3xl">Sign in your account.</h1>
          <FormWrapper form={form} onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <TextField
              required
              fullWidth
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              required
              fullWidth
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your Password"
              type="password"
            />
            <Button type="submit" fullWidth loading={isLoading}>
              Log-in
            </Button>
          </FormWrapper>
        </VStack>
      </HStack>
      <div className="relative hidden h-full lg:block">
        <Image fill src="/images/background.webp" className="object-cover object-left" alt="" />
      </div>
    </div>
  );
};

export default FormLogin;
