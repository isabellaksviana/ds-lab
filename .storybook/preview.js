import '../src/styles.css';
import './preview.css';
import { themes } from 'storybook/theming';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  // Cada componente ganha uma página "Docs": todas as stories, o código de
  // cada uma e a tabela de props tirada dos tipos do TypeScript.
  tags: ['autodocs'],
  parameters: {
    // A página Docs é escura, como o tema padrão do DS.
    docs: { theme: themes.dark },
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
