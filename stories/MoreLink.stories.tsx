import { Meta, StoryObj } from '@storybook/react';
import { MoreLink } from '../src';
import imageFile from '../public/test.jpg';

const meta: Meta<typeof MoreLink> = {
  title: 'Components/Commons/MoreLink',
  component: MoreLink,
};

export default meta;
type Story = StoryObj<typeof MoreLink>;

export const Default: Story = {
  args: {
    href: '/',
    headline: 'Headline 1',
  },
};

export const WithImageSource: Story = {
  args: {
    href: '/',
    headline: 'Headline 1',
    imgSrc: imageFile,
  },
};
