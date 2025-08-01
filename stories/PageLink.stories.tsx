import { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageLink from '../src/components/PageLink/PageLink';

const meta: Meta<typeof PageLink> = {
  title: 'Components/Commons/PageLink',
  component: PageLink,
} satisfies Meta<typeof PageLink>;

export default meta;
type Story = StoryObj<typeof PageLink>;

export const Default: Story = {
  args: {
    href: 'www.salzpaten.de',
    children: 'Link',
  },
};
