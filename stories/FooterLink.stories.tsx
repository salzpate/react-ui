import { Meta, StoryObj } from '@storybook/react';
import FooterLink from '../src/components/Footer/FooterLink/FooterLink';

const meta: Meta<typeof FooterLink> = {
  title: 'Components/Footer/FooterLink',
  component: FooterLink,
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Content',
  },
};
