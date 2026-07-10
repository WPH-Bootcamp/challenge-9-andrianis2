import type { Metadata } from 'next';
import { LoginForm } from '@/features/auth/login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Masuk ke akun Restaurant App',
};

export default function LoginPage() {
  return (
    <section className='w-full max-w-md rounded-xl border bg-background p-6 shadow-sm'>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          Masukkan email dan password Anda.
        </p>
      </div>

      <LoginForm />
    </section>
  );
}
