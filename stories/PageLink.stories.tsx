import { Meta, StoryObj } from '@storybook/react';
import PageLink from '../src/components/PageLink/PageLink';

const meta: Meta<typeof PageLink> = {
  title: 'Components/Commons/PageLink',
  component: PageLink,
};

export default meta;
type Story = StoryObj<typeof PageLink>;

export const Default: Story = {
  args: {
    href: 'www.salzpaten.de',
    children: 'Link',
  },
};
