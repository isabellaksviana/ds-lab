import type { ReactNode } from 'react';

type CardProps = {
  /** O conteúdo do card: texto, outros componentes do DS ou qualquer JSX. */
  children: ReactNode;
};

/**
 * Caixa com fundo, borda e cantos arredondados para agrupar um conteúdo.
 * O Card é só a caixa: quem organiza o que vai dentro é quem usa.
 */

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
