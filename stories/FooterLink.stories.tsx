import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import FooterLink, { FooterLinkProps } from "../src/components/Footer/FooterLink/FooterLink";

export default {
  title: 'Components/Footer/FooterLink',
  component: FooterLink,
} as Meta;

const Template: Story<PropsWithChildren<FooterLinkProps>> = (args) => <FooterLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  children: 'Content'
};
