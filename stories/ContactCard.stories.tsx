import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ContactCard from '../src/components/Contact/ContactCard/ContactCard';
import imageFile from '../public/test.jpg';

const meta: Meta<typeof ContactCard> = {
  title: 'Components/Contact/ContactCard',
  component: ContactCard,
};

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
    street: 'Street',
    town: 'Town',
    position: 'Position',
    imageSrc: imageFile,
  },
};
