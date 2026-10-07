import type { ReactNode, ComponentProps } from 'react';
type BaseProps = {
  /** O texto do botão. Diga a ação com um verbo (ex.: "Ver projetos", "Salvar"). */
  label: string;
  /** Ícone antes do texto. O tamanho vem do DS (1rem): passe só o ícone, sem `size`. */
  iconStart?: ReactNode;
  /** Ícone depois do texto. Mesma regra do `iconStart`. */
  iconEnd?: ReactNode;
  /**
   * `primary` (roxo) para a ação principal da tela, de preferência uma só.
   * `default` (contorno) para as outras ações.
   * `danger` (vermelho) para ações que apagam ou não têm volta.
   */
  variant?: 'default' | 'primary' | 'danger';
};
type ButtonAsButton = {
  href?: undefined;
} & BaseProps &
  ComponentProps<'button'>;

type ButtonAsLink = {
  /** Com `href`, o botão vira um link (`<a>`): link navega, botão executa uma ação. */
  href: string;
} & BaseProps &
  ComponentProps<'a'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Botão para ações. Com `href`, vira um link com a mesma aparência.
 * Aceita os atributos normais de `<button>` (como `disabled` e `onClick`)
 * ou, com `href`, os de `<a>` (como `target`).
 */
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
