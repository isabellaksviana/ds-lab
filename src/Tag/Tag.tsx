type TagProps = {
  /** O texto da tag. Curto, de uma a três palavras (ex.: "React", "lendo agora"). */
  label: string;
  /**
   * `default` (contorno cinza) para classificar.
   * `secondary` (contorno tracejado amarelo) para algo em andamento.
   */
  variant?: 'default' | 'secondary';
};

/**
 * Rótulo curto que classifica um conteúdo: uma tecnologia, um assunto, uma categoria.
 * É só informação, não é clicável. Para status (como "No ar"), use o `Badge`.
 */
export default function Tag({ label, variant = 'default' }: TagProps) {
  const className = `tag tag-${variant}`;
  return <span className={className}>{label}</span>;
}
