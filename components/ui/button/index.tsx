'use client';

import React, { forwardRef, useRef } from 'react';
import cn from 'classnames';
import styles from './button.module.css';
import { mergeRefs } from 'react-merge-refs';
import { Loading } from '@/components/ui';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
  color: 'primary' | 'gray' | 'purple';
  size: 'small' | 'medium' | 'large';
  variant: 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
  type?: 'submit' | 'reset' | 'button';
  form?: string;
  leading?: boolean;
  trailing?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      className,
      children,
      color = 'primary',
      size = 'small',
      variant = 'solid',
      type = 'button',
      leadingIcon,
      trailingIcon,
      leading = false,
      trailing = false,
      loading = false,
      disabled = false,
      ...rest
    },
    buttonRef,
  ) => {
    const ref = useRef(null);
    const rootClassName = cn(
      styles.root,
      color && styles[color],
      size && styles[size],
      variant && styles[variant],
      {
        [styles.loading]: loading,
        [styles.disabled]: disabled
      },
      className,
    );

    return React.createElement(
      Component,
      {
        ref: mergeRefs([ref, buttonRef]),
        className: rootClassName,
        'data-size': size,
        'data-color': color,
        'data-variant': variant,
        'data-type': type,
        disabled:
          Component === 'button' || Component === 'input'
            ? disabled
            : undefined,
        'aria-disabled': disabled ? true : undefined,
        ...rest
      },
      <>
        {leading && leadingIcon}
        {children}
        {trailing && trailingIcon}
        {loading && (
          <i className='m-0 flex pl-2'>
            <Loading />
          </i>
        )}
      </>,
    );
  },
);

Button.displayName = 'Button';
