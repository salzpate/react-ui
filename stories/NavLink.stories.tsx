import { Meta, StoryObj } from '@storybook/react';
import { NavLink } from '../src';

const meta: Meta<typeof NavLink> = {
  title: 'Components/Header/NavLink',
  component: NavLink,
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Content',
  },
};
