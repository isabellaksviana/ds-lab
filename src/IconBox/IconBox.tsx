import type { ReactNode } from 'react';

type IconBoxProps = {
  icon: ReactNode;
  variant?: 'primary';
};

export default function IconBox({ icon, variant = 'primary' }: IconBoxProps) {
  const className = `iconbox iconbox-${variant}`;
  return <span className={className}>{icon}</span>;
}
