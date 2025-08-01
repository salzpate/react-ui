import { Meta, StoryObj } from '@storybook/nextjs-vite';
import HeadlineTextElement from '../src/components/HeadlineTextElement/HeadlineTextElement';

import imageFile from '../public/test.jpg';

const meta: Meta<typeof HeadlineTextElement> = {
  title: 'Components/Commons/HeadlineTextElement',
  component: HeadlineTextElement,
} satisfies Meta<typeof HeadlineTextElement>;

export default meta;
type Story = StoryObj<typeof HeadlineTextElement>;

export const Default: Story = {
  args: {
    headline: 'Headline',
    children: 'Content',
  },
};

export const WithImageSource: Story = {
  args: {
    headline: 'Headline',
    children: 'Content',
    imgSrc: imageFile,
  },
};
