type TagProps = {
  label: string;
  variant?: 'default' | 'secondary';
};

export default function Tag({ label, variant = 'default' }: TagProps) {
  const className = `tag tag-${variant}`;
  return <span className={className}>{label}</span>;
}
