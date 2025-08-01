import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from '../src/components/Footer/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

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
