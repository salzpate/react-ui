import { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '../src/components/ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/Commons/ButtonLink',
  component: ButtonLink,
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    href: 'www.salzpaten.de',
    children: 'Link',
  },
};
