type BadgeProps = {
  label: string;
  variant?: 'secondary' | 'success';
};

export default function Badge({ label, variant = 'success' }: BadgeProps) {
  const className = `badge badge-${variant}`;
  return <span className={className}>{label}</span>;
}
