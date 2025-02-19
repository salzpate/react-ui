import { Meta, StoryObj } from '@storybook/react';
import { DisplayMore } from '../src';

const meta: Meta<typeof DisplayMore> = {
  title: 'Components/Commons/DisplayMore',
  component: DisplayMore,
};

export default meta;
type Story = StoryObj<typeof DisplayMore>;

export const Default: Story = {
  args: {
    id: 'id1',
    children: 'Content',
  },
};

export const WithClassName: Story = {
  args: {
    id: 'id3',
    children: 'Content',
    className: 'bg-gray-200',
  },
};
