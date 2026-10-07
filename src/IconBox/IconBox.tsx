import type { ReactNode } from 'react';

type IconBoxProps = {
  /**
   * Ícone do Lucide. O tamanho vem do DS (1.25rem): passe só o ícone, sem `size`.
   * Use `aria-hidden="true"`: quem dá nome é o texto ao lado.
   */
  icon: ReactNode;
  /** Cor do quadrado. Por enquanto só existe `primary` (roxo). */
  variant?: 'primary';
};

/**
 * Ícone dentro de um quadrado com fundo. Serve para marcar itens de uma lista
 * ou o assunto de um card. É só visual: o texto ao lado é que explica.
 */

export default function IconBox({ icon, variant = 'primary' }: IconBoxProps) {
  const className = `iconbox iconbox-${variant}`;
  return <span className={className}>{icon}</span>;
}
