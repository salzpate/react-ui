import { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../src';

const meta: Meta<typeof Banner> = {
  title: 'Components/Commons/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const WithInfo: Story = {
  args: {
    type: 'info',
    children: 'Info Banner',
  },
};

export const WithSuccess: Story = {
  args: {
    type: 'success',
    children: 'Success Banner',
  },
};

export const WithWarning: Story = {
  args: {
    type: 'warning',
    children: 'Warning Banner',
  },
};

export const WithError: Story = {
  args: {
    type: 'error',
    children: 'Error Banner',
  },
};
