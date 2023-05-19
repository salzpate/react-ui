import { Meta, StoryObj } from '@storybook/react';
import ContactCard from '../src/components/Contact/ContactCard/ContactCard';

const meta: Meta<typeof ContactCard> = {
  title: 'Components/Contact/ContactCard',
  component: ContactCard,
};

import imageFile from '../public/test.jpg';

export default meta;
type Story = StoryObj<typeof ContactCard>;

export const Default: Story = {
  args: {
    name: 'Contact Name',
    imageSrc: imageFile,
  },
};

export const Full: Story = {
  args: {
    className: '',
    email: 'info@test.com',
    emailHref: 'mailto:info@test.com',
    phone: '0000/00000',
    fax: '0000/00000',
    id: 'contactId',
    name: 'Contact Name',
    position: 'Position',
    imageSrc: imageFile,
  },
};
