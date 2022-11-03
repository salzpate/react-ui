import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import MoreLink, { MoreLinkProps } from '../src/components/MoreLink/MoreLink';

export default {
  title: 'Components/Commons/MoreLink',
  component: MoreLink,
} as Meta;

import imageFile from '../public/test.jpg';

const Template: Story<PropsWithChildren<MoreLinkProps>> = args => <MoreLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  headline: 'Headline 1',
};

export const WithImageSource = Template.bind({});
WithImageSource.args = {
  href: '/',
  headline: 'Headline 1',
  imgSrc: imageFile,
};
