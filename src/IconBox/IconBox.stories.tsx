import type { Meta, StoryObj } from '@storybook/react-vite';
import IconBox from './IconBox';
import { Component } from 'lucide-react';

const meta = {
  component: IconBox,
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <Component aria-hidden="true" />,
    variant: 'primary',
  },
};
