import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import { Search, ArrowRight } from 'lucide-react';

const meta = {
  component: Button,
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
