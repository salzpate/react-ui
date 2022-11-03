import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps, BannerTypes } from '../src/components/Banner/Banner';

export default {
  title: 'Components/Commons/Banner',
  component: Banner,
} as Meta;

const Template: Story<PropsWithChildren<BannerProps>> = args => <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: BannerTypes.info,
  children: 'Info Banner',
};

export const Success = Template.bind({});
Success.args = {
  type: BannerTypes.success,
  children: 'Success Banner',
};

export const Warning = Template.bind({});
Warning.args = {
  type: BannerTypes.warning,
  children: 'Warning Banner',
};

export const Error = Template.bind({});
Error.args = {
  type: BannerTypes.error,
  children: 'Error Banner',
};
