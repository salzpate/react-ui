import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import NavLink, { NavLinkProps } from "../src/components/Header/NavLink/NavLink";

export default {
  title: 'Components/Header/NavLink',
  component: NavLink,
} as Meta;

const Template: Story<PropsWithChildren<NavLinkProps>> = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'Content'
};
