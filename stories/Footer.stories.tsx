import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../src';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    text: '(c) Ronny Krammer',
    menuItems: [
      {
        children: 'Ausschreibung',
        href: '/',
        activeMenuName: 'ausschreibung',
      },
      {
        children: 'Strecken',
        href: '/',
        activeMenuName: 'strecken',
      },
      {
        children: 'Kontakt',
        href: '/',
        activeMenuName: 'kontakt',
      },
    ],
  },
};
