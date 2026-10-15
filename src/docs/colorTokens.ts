// As linhas da ficha de cores (página Fundamentos/Cores).
// O valor de cada token NÃO fica aqui: a ficha lê do tokens.css na hora.

export type ColorToken = {
  /** nome do token, com os dois tracinhos: '--bg' */
  name: string;
  /** pra que serve, numa frase */
  use: string;
  /** par que mede o contraste: [texto, fundo] */
  contrast?: [string, string];
};

export const baseTokens: ColorToken[] = [
  {
    name: '--bg',
    use: 'Fundo da página. No claro, lavanda: nada de branco puro.',
    contrast: ['--text-muted', '--bg'],
  },
  {
    name: '--surface',
    use: 'Cartões e blocos. Bem perto do fundo: quem separa o cartão é a borda.',
    contrast: ['--text-muted', '--surface'],
  },
  {
    name: '--surface-strong',
    use: 'Hover e áreas que pedem mais destaque.',
    contrast: ['--text-muted', '--surface-strong'],
  },
  {
    name: '--border',
    use: 'Bordas e divisórias.',
  },
  {
    name: '--text',
    use: 'Texto principal.',
    contrast: ['--text', '--bg'],
  },
  {
    name: '--text-muted',
    use: 'Texto de apoio: descrições, legendas.',
    contrast: ['--text-muted', '--bg'],
  },
];

export const accentTokens: ColorToken[] = [
  {
    name: '--primary',
    use: 'Lilás: ação e identidade. Botão principal, links, foco.',
    contrast: ['--primary', '--bg'],
  },
  {
    name: '--secondary',
    use: 'Destaque e identidade: o destaque do rótulo mono e a tag de destaque. Amarelo no escuro, rosa-orquídea no claro.',
    contrast: ['--secondary', '--bg'],
  },
  {
    name: '--warning',
    use: 'Em andamento: projeto em construção. Amarelo no escuro; no claro vira âmbar, porque o amarelo puro some no fundo claro.',
    contrast: ['--warning', '--bg'],
  },
  {
    name: '--success',
    use: 'Verde: deu certo, pronto, no ar.',
    contrast: ['--success', '--bg'],
  },
  {
    name: '--danger',
    use: 'Vermelho: fundo do botão de ação destrutiva, que apaga ou não tem volta.',
    contrast: ['--on-danger', '--danger'],
  },
  {
    name: '--danger-text',
    use: 'Texto de erro. No escuro, o vermelho do botão some no fundo, então o texto ganha um vermelho mais claro.',
    contrast: ['--danger-text', '--bg'],
  },
];

export const softTokens: ColorToken[] = [
  {
    name: '--primary-soft',
    use: 'Fundo suave do lilás, com texto --primary.',
    contrast: ['--primary', '--primary-soft'],
  },
  {
    name: '--secondary-soft',
    use: 'Fundo suave do destaque.',
    contrast: ['--on-secondary-soft', '--secondary-soft'],
  },
  {
    name: '--on-secondary-soft',
    use: 'Texto em cima do fundo suave do destaque.',
    contrast: ['--on-secondary-soft', '--secondary-soft'],
  },
  {
    name: '--warning-soft',
    use: 'Fundo do badge de em andamento, com texto --warning.',
    contrast: ['--warning', '--warning-soft'],
  },
  {
    name: '--success-soft',
    use: 'Fundo do badge verde, com texto --success.',
    contrast: ['--success', '--success-soft'],
  },
  {
    name: '--danger-soft',
    use: 'Fundo suave do vermelho, com texto --danger-text.',
    contrast: ['--danger-text', '--danger-soft'],
  },
  {
    name: '--on-primary',
    use: 'Texto em cima do lilás (o botão principal).',
    contrast: ['--on-primary', '--primary'],
  },
  {
    name: '--on-danger',
    use: 'Texto em cima do vermelho (o botão danger).',
    contrast: ['--on-danger', '--danger'],
  },
];
