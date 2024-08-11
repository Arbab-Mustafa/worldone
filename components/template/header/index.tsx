import Link from 'next/link';
import { NextLogo, SupabaseLogo, StripeLogo } from '../icons';

export const Header = () => {
  return (
    <div className='flex flex-col items-center gap-16'>
      <div className='flex items-center justify-center gap-8'>
        <Link
          href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
          target='_blank'
          rel='noreferrer'
        >
          <SupabaseLogo />
        </Link>
        <span className='h-6 rotate-45 border-l' />
        <Link href='https://nextjs.org/' target='_blank' rel='noreferrer'>
          <NextLogo />
        </Link>
        <span className='h-6 rotate-45 border-l' />
        <Link href='https://stripe.com/' target='_blank' rel='noreferrer'>
          <StripeLogo />
        </Link>
      </div>
      <h1 className='sr-only'>Supabase, Next.js and Stripe Starter Template</h1>
      <p className='mx-auto max-w-xl text-center text-3xl !leading-tight text-fg-text-contrast lg:text-4xl'>
        The fastest way to build apps with{' '}
        <Link
          href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
          target='_blank'
          className='font-bold hover:underline'
          rel='noreferrer'
        >
          Supabase,
        </Link>{' '}
        <Link
          href='https://nextjs.org/'
          target='_blank'
          className='font-bold hover:underline'
          rel='noreferrer'
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href='https://stripe.com/'
          target='_blank'
          className='font-bold hover:underline'
          rel='noreferrer'
        >
          Stripe
        </Link>{' '}
      </p>
      <div className='my-8 w-full bg-gradient-to-r from-transparent via-fg-border to-transparent p-[1px]' />
    </div>
  );
};
