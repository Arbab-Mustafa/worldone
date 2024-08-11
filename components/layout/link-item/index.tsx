'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui';

interface Link {
  href: string;
  label: string;
  current?: boolean;
}

interface NavbarLinkItemProps {
  links: Link[];
  className?: string;
  onClick?: () => void;
}

export const NavbarLinkItem: FC<NavbarLinkItemProps> = ({
  links,
  className,
  onClick
}) => {
  const pathName = usePathname();

  return (
    <div className={className}>
      {links.map(({ href, label }, index) => {
        const isActive = pathName === href;
        return (
          <Link
            key={index}
            href={href}
            className='flex items-center'
            aria-current={isActive ? 'page' : undefined}
          >
            <Button
              color='gray'
              size='medium'
              variant='ghost'
              onClick={onClick}
              className='max-lg:w-full max-lg:!justify-start'
            >
              {label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export const FooterLinkItem: FC<Link> = ({ href, label }) => (
  <Link
    href={href}
    passHref
    className='hover:text-fg-text-contrast hover:underline'
  >
    {label}
  </Link>
);
