import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ButtonLink from '../src/components/ButtonLink/ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/Commons/ButtonLink',
  component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    href: 'www.salzpaten.de',
    children: 'Link',
  },
};
