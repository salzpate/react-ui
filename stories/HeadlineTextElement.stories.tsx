import { Meta, StoryObj } from '@storybook/react';

import imageFile from '../public/test.jpg';
import { HeadlineTextElement } from '../src';

const meta: Meta<typeof HeadlineTextElement> = {
  title: 'Components/Commons/HeadlineTextElement',
  component: HeadlineTextElement,
};

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
