import React from "react";
import { Meta, Story } from '@storybook/react';
import ContactCard, {ContactCardProps } from "../src/components/Contact/ContactCard/ContactCard";

export default {
  title: 'Components/Contact/ContactCard',
  component: ContactCard,
} as Meta;

import imageFile from '../public/test.jpg';

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Contact Name',
  imageSrc: imageFile,
};

export const Full = Template.bind({});
Full.args = {
  className: '',
  email: 'info@test.com',
  emailHref: 'mailto:info@test.com',
  phone: '0000/00000',
  fax: '0000/00000',
  id: 'contactId',
  name: 'Contact Name',
  position: 'Position',
  imageSrc: imageFile,
};
