import * as z from 'zod';

import { REGEX_PASSWORD } from '../lib/regex';
import { validationMessages } from './validation.utility';

export const authSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    }),
});

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: 'Verification code must be 6 characters long',
    })
    .max(6),
});

export const checkEmailSchema = z.object({
  email: authSchema.shape.email,
});

export const resetPasswordSchema = z
  .object({
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
    code: verifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const registerSchema = z
  .object({
    firstName: z.string().nonempty(validationMessages.required('First name')),
    lastName: z.string().nonempty(validationMessages.required('Last name')),
    email: z.string().nonempty(validationMessages.required('Email')).email(validationMessages.invalid('Email')),
    company: z.string().nonempty(validationMessages.required('Company code')),
    password: z
      .string()
      .nonempty(validationMessages.required('Password'))
      .min(8, validationMessages.gt(8, 'Password'))
      .max(20, validationMessages.lt(20, 'Password'))
      .refine((v) => REGEX_PASSWORD.test(v), 'Password too weak'),
    confirmPassword: z.string().nonempty(validationMessages.required('Confirm password')),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const changePasswordSchema = z.object({
  oldPassword: z
    .string()
    .nonempty(validationMessages.required('Password'))
    .min(8, validationMessages.gt(8, 'Password'))
    .refine((v) => REGEX_PASSWORD.test(v), 'Password too week'),
  newPassword: z
    .string()
    .nonempty(validationMessages.required('Password'))
    .min(8, validationMessages.gt(8, 'Password'))
    .refine((v) => REGEX_PASSWORD.test(v), 'Password too week'),
});

export type AuthSchema = z.infer<typeof authSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
