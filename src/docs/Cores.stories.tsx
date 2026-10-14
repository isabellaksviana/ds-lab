import type { Meta, StoryObj } from '@storybook/react-vite';
import TokenTable from './TokenTable';
import { baseTokens, accentTokens, softTokens } from './colorTokens';

const meta = {
  component: TokenTable,
  title: 'Fundamentos/Cores',
  tags: ['!autodocs'],
} satisfies Meta<typeof TokenTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  tags: ['!dev'],
  args: {
    tokens: baseTokens,
  },
};

export const Destaque: Story = {
  tags: ['!dev'],
  args: {
    tokens: accentTokens,
  },
};

export const Suaves: Story = {
  tags: ['!dev'],
  args: {
    tokens: softTokens,
  },
};
