type BadgeProps = {
  /** O status, em uma ou duas palavras (ex.: "No ar", "Em construção"). */
  label: string;
  /**
   * `success` (verde) para pronto, no ar, deu certo.
   * `secondary` (amarelo) para algo em andamento.
   */
  variant?: 'secondary' | 'success';
};

/**
 * Selo que mostra o status de alguma coisa. Para classificar (tecnologia,
 * assunto), use a `Tag`.
 */

export default function Badge({ label, variant = 'success' }: BadgeProps) {
  const className = `badge badge-${variant}`;
  return <span className={className}>{label}</span>;
}
