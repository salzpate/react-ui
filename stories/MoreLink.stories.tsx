import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MoreLink from '../src/components/MoreLink/MoreLink';
import imageFile from '../public/test.jpg';

const meta: Meta<typeof MoreLink> = {
  title: 'Components/Commons/MoreLink',
  component: MoreLink,
} satisfies Meta<typeof MoreLink>;

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
