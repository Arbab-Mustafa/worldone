import React from 'react';
import cn from 'classnames';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;

  return (
    <input
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      className={cn(
        `h-10 w-full rounded-lg border border-fg-line bg-transparent px-3.5 text-sm font-medium text-fg-text-contrast outline-none placeholder:text-fg-solid hover:border-fg-border focus:border-fg-border disabled:cursor-default disabled:opacity-50`,
        className,
      )}
      {...rest}
    />
  );
};
