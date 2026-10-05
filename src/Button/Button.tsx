import type { ReactNode, ComponentProps } from 'react';
type BaseProps = {
  label: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  variant?: 'default' | 'primary' | 'danger';
};
type ButtonAsButton = {
  href?: undefined;
} & BaseProps &
  ComponentProps<'button'>;

type ButtonAsLink = {
  href: string;
} & BaseProps &
  ComponentProps<'a'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  label,
  iconStart,
  iconEnd,
  variant = 'default',
  ...rest
}: ButtonProps) {
  const className = `button button-${variant}`;
  const content = (
    <>
      {iconStart}
      {label}
      {iconEnd}
    </>
  );
  if (rest.href !== undefined) {
    return (
      <a {...rest} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={className}>
      {content}
    </button>
  );
}
