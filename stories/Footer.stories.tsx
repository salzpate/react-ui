import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer, { FooterProps } from '../src/components/Footer/Footer/Footer';

export default {
  title: 'Components/Footer/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '(c) Ronny Krammer',
  menuItems: [
    {
      children: 'Ausschreibung',
      href: '/',
      activeMenuName: 'ausschreibung',
    },
    {
      children: 'Strecken',
      href: '/',
      activeMenuName: 'strecken',
    },
    {
      children: 'Kontakt',
      href: '/',
      activeMenuName: 'kontakt',
    },
  ],
};
