import '../src/styles.css';
import './preview.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
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
