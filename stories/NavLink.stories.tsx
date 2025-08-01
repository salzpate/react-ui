import { Meta, StoryObj } from '@storybook/nextjs-vite';
import NavLink from '../src/components/Header/NavLink/NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Components/Header/NavLink',
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Content',
  },
};
