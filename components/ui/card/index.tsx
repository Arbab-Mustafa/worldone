import { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export const Card = ({ title, description, footer, children }: Props) => {
  return (
    <div className='max-w-[21.2rem]'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-semibold text-fg-text-contrast'>{title}</h3>
        <p className='text-sm	font-medium text-fg-text'>{description}</p>
        {children}
        {footer}
      </div>
    </div>
  );
};
