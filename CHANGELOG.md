# Changelog

O que mudou em cada versão do Design System.

## Não lançado

- **Novo mapa das cores: `--secondary` virou destaque, e "em andamento" virou estado (`--warning`).**
  - `--secondary` agora é destaque e identidade (rótulo mono, tag de destaque), com um tom por tema: amarelo no escuro (não muda) e rosa-orquídea no claro (`--secondary` e `--on-secondary-soft` `#950c72`, `--secondary-soft` `#fceef8`).
  - Tokens novos `--warning` e `--warning-soft`, pro estado "em andamento": amarelo no escuro (`#f6d365` sobre `#2d2a22`) e âmbar no claro (`#6a3d00` sobre `#f8e6c4`, o mesmo âmbar que o chip amarelo usava).
  - `Badge`: variante nova `warning`, e a `secondary` saiu (o Badge fica só com variantes de status: `success` e `warning`). **Quebra compatibilidade:** quem usava `<Badge variant="secondary">` precisa trocar por `warning`.
  - `Tag`: a variante `secondary` continua igual no código, mas passa a querer dizer destaque (no claro, fica rosa).
  - Ficha de Cores com `--warning` e `--warning-soft`. Todo texto continua passando de 7:1 no fundo e no cartão, nos dois temas.
- Tema escuro: a base puxa pro roxo, na família do lilás (`--bg` `#131219`, `--surface` `#1d1b26`, `--surface-strong` `#282536`, `--border` `#383449`). Mesma escuridão de antes; todo texto continua passando de 7:1.
- Documentação dividida em páginas por assunto, em "Fundamentos": Como usar, Cores, Tipografia e Arredondamento (substituem a página "Tokens"). Em Cores, cada token é uma linha de ficha (amostra, nome, valor, uso e contraste) que lê o valor do tema ativo: as amostras, os valores e o contraste trocam junto com o tema da barra, e nenhum hex fica escrito à mão na documentação.
- Tema claro: o amarelo virou âmbar dourado (`--secondary` `#724700`, `--secondary-soft` `#f8e6c4`, `--on-secondary-soft` `#6a3d00`). Agora passa de 7:1 no fundo e no cartão, e deixa de ser exceção à regra de contraste. O tema escuro não muda.
- Documentação no Storybook: cada componente tem uma página "Docs" com as stories, o código de cada exemplo e a tabela de props com a explicação de cada uma (comentários JSDoc nos tipos). A página Docs é escura, e os exemplos seguem o tema escolhido na barra.
- `Button` em TypeScript, com dois modos: sem `href`, aceita os atributos de `<button>` (como `disabled`); com `href`, aceita os de `<a>`. Misturar os dois (ex.: `href` + `disabled`) dá erro de tipo.
- Stories `Danger`, `Disabled`, `Link` e `WithIcon` do `Button`.
- Componente `Tag` (TypeScript): `label` e `variant` (`default`, `secondary`), com stories.
- Componente `Badge` (TypeScript): `label` e `variant` (`secondary`, `success`), com stories.
- Componente `IconBox` (TypeScript): ícone num quadrado com fundo; `icon` e `variant` (`primary`, o padrão), com story.
- Componente `Card` (TypeScript): só a caixa (superfície, borda, raio e espaçamento); o conteúdo vem por `children`. Stories `Default` (título e texto) e `WithComponents` (com `IconBox` e `Tag` dentro).
- Token `--live` renomeado para `--success` (e `--live-soft` para `--success-soft`). **Quebra compatibilidade:** quem usava `--live` precisa trocar.
- Arquivos organizados em uma pasta por componente (`src/Button/`, `src/Tag/`, ...).
- Ícones dentro do `Button` têm tamanho fixo de `1rem`, definido pelo DS (quem usa não passa `size`).
- Estilo do `Button` desabilitado: a mesma variante com 45% de opacidade, cursor `not-allowed` e sem reação ao hover.
- Revisão das cores (contraste conferido nos dois temas):
  - Tema claro com fundo lavanda (`--bg` `#f3f0fb`, `--surface` `#f7f4fb`, `--surface-strong` e `--border` no mesmo tom).
  - `--text-muted` um pouco mais forte nos dois temas, pra passar de 7:1 também sobre o `--surface-strong`.
  - Os `-soft` viraram cores fixas (não transparentes), pra passar de 7:1 tanto no fundo quanto no cartão.
  - Tema claro: `--secondary` agora é `#856300` (o amarelo mais vivo que passa no AA da WCAG) e `--danger` é `#991b1b`.
  - Tokens novos: `--danger-text` (texto de erro; no escuro, um vermelho claro) e `--on-secondary-soft` (texto em cima do chip amarelo).

## 0.0.1 (2026-10-01)

- O Design System virou um projeto próprio, separado do portfólio.
- Tokens de cor (temas claro e escuro), fonte e arredondamento.
- `Button`: `label`, `iconStart`, `iconEnd`, `variant` (`default`, `primary`, `danger`), `href` (vira link) e repasse dos demais atributos.
