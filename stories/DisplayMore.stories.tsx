import { Meta, StoryObj } from '@storybook/nextjs-vite';
import DisplayMore from '../src/components/DisplayMore/DisplayMore';

const meta: Meta<typeof DisplayMore> = {
  title: 'Components/Commons/DisplayMore',
  component: DisplayMore,
} satisfies Meta<typeof DisplayMore>;

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
