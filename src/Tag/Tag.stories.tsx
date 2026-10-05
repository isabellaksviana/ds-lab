import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from './Tag';

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'React',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    label: 'React',
    variant: 'secondary',
  },
};
