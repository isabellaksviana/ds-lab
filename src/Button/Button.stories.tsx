import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import { Search, ArrowRight } from 'lucide-react';

const meta = {
  component: Button,
  // A tabela de props é escrita aqui porque o Storybook não consegue ler a
  // união de tipos do Button (botão ou link). Os textos repetem o JSDoc do
  // Button.tsx: mudou lá, muda aqui.
  argTypes: {
    label: {
      description: 'O texto do botão. Diga a ação com um verbo (ex.: "Ver projetos", "Salvar").',
      type: { name: 'string', required: true },
    },
    variant: {
      description:
        '`primary` (roxo) para a ação principal da tela, de preferência uma só. `default` (contorno) para as outras ações. `danger` (vermelho) para ações que apagam ou não têm volta.',
      options: ['default', 'primary', 'danger'],
      control: 'radio',
      table: { type: { summary: "'default' | 'primary' | 'danger'" }, defaultValue: { summary: "'default'" } },
    },
    iconStart: {
      description: 'Ícone antes do texto. O tamanho vem do DS (1rem): passe só o ícone, sem `size`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    iconEnd: {
      description: 'Ícone depois do texto. Mesma regra do `iconStart`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    href: {
      description: 'Com `href`, o botão vira um link (`<a>`): link navega, botão executa uma ação.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Clique aqui',
  },
};

export const Primary: Story = {
  args: {
    label: 'Clique aqui',
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Excluir',
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Clique aqui',
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Clique aqui',
    href: '#',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Buscar',
    iconStart: <Search aria-hidden="true" />,
    iconEnd: <ArrowRight aria-hidden="true" />,
  },
};
