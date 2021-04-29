import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import HeadlineTextElement, { HeadlineTextElementProps } from "../src/components/HeadlineTextElement/HeadlineTextElement";

import imageFile from '../public/test.jpg';

export default {
  title: 'Components/Commons/HeadlineTextElement',
  component: HeadlineTextElement,
} as Meta;

const Template: Story<PropsWithChildren<HeadlineTextElementProps>> = (args) => <HeadlineTextElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Headline',
  children: 'Content',
};

export const WithImageSource = Template.bind({});
WithImageSource.args = {
  headline: 'Headline',
  children: 'Content',
  imgSrc: imageFile,
};
