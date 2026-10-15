import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    label: 'Em andamento',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    label: 'No ar',
    variant: 'success',
  },
};
