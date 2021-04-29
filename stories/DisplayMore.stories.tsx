import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import DisplayMore, { DisplayMoreProps } from "../src/components/DisplayMore/DisplayMore";

export default {
  title: 'Components/Commons/DisplayMore',
  component: DisplayMore,
} as Meta;

const Template: Story<PropsWithChildren<DisplayMoreProps>> = (args) => <DisplayMore {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id1',
  children: 'Content'
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  id: 'id3',
  children: 'Content',
  className: 'bg-gray-200'
};
