import '../src/styles.css';
import './preview.css';
// CSS das páginas de Fundamentos: só existe no Storybook, não vai pro styles.css do DS.
import '../src/docs/TokenTable.css';
import { themes } from 'storybook/theming';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  // Cada componente ganha uma página "Docs": todas as stories, o código de
  // cada uma e a tabela de props tirada dos tipos do TypeScript.
  tags: ['autodocs'],
  parameters: {
    // A página Docs é escura, como o tema padrão do DS.
    docs: { theme: themes.dark },
    // Fundamentos primeiro, na ordem de leitura; depois os componentes.
    options: {
      storySort: {
        order: ['Fundamentos', ['Como usar', 'Cores', 'Tipografia', 'Arredondamento'], '*'],
      },
    },
  },
  // Botão de tema na barra do Storybook. Escuro é o padrão do DS.
  globalTypes: {
    theme: {
      description: 'Tema',
      toolbar: {
        title: 'Tema',
        icon: 'contrast',
        items: [
          { value: 'dark', title: 'Escuro' },
          { value: 'light', title: 'Claro' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme;
      return Story();
    },
  ],
};

export default preview;
