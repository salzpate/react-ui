import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import PageSection, { PageSectionProps } from "../src/components/PageSection/PageSection";

export default {
  title: 'Components/PageSection',
  component: PageSection,
} as Meta;

const Template: Story<PropsWithChildren<PageSectionProps>> = (args) => <PageSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id1',
  headline: 'Headline 1',
};

export const WithSubSection = Template.bind({});
WithSubSection.args = {
  id: 'id2',
  headline: 'Headline 2',
  subSection: true
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  id: 'id3',
  headline: 'Headline 3',
  className: 'bg-blue-500'
};
