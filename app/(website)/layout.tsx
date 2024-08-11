import { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import 'styles/main.css';
import { Toaster } from '@/components/ui/toasts/toaster';
import { Archivo } from 'next/font/google';
import { Footer, Navbar } from '@/components/layout';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo'
});

const meta = {
  title: 'One World Chain',
  description: 'A Decentralized EVM Compatible Ethereum Scaling Platform',
  cardImage: '/home2.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: [ 'New Web Order'],
    authors: [{ name: 'New Web Order', url: 'https://newweborder.co/' }],
    creator: 'New Web Order',
    publisher: 'New Web Order',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@New_Web_Order',
      creator: '@New_Web_Order',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`${archivo.variable} font-sans`}>
      <body className='loading'>
        <main
          id='skip'
          className='	md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)] bg-white'
        >
          <Navbar />
          {children}
          <Footer />
        </main>
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
