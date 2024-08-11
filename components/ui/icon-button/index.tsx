'use client';
import * as React from 'react';
import styles from './icon-button.module.css';
import cn from 'classnames';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '../tooltip';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
  variant?: 'primary' | 'gray';
  size?: 'small' | 'medium';
  type?: 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
  icon: React.ReactElement<{ className?: string }>;
  disabled?: boolean;
  tooltipClassName?: string;
  tooltipContent?: string;
  tooltipCustomStyle?: React.CSSProperties;
  tooltipDirection?: 'top' | 'right' | 'bottom' | 'left';
}
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      as: Component = 'button',
      className,
      variant = 'primary',
      size = 'small',
      type = 'solid',
      disabled = false,
      icon,
      tooltipClassName,
      tooltipContent,
      tooltipCustomStyle,
      tooltipDirection = 'top',
      ...props
    },
    _ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const rootClassName = cn(
      styles.root,
      variant && styles[variant],
      size && styles[size],
      type && styles[type],
      { [styles.disabled]: disabled },
      className,
    );

    const iconEl = React.cloneElement(icon, {
      className: `${icon.props.className || ''} ${styles[`iconSize_${size}`]}`
    });
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {React.createElement(
              Component,
              {
                className: rootClassName,
                'aria-label': tooltipContent,
                'data-size': size,
                'data-type': type,
                'data-variant': variant,
                disabled,
                ...props,
                ...(Component === 'button' ? { type: 'button' } : {})
              },
              iconEl,
            )}
          </TooltipTrigger>
          {tooltipContent && (
            <TooltipContent
              className={tooltipClassName}
              side={tooltipDirection}
              style={tooltipCustomStyle}
            >
              {tooltipContent}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  },
);

IconButton.displayName = 'IconButton';
