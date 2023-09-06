import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerTypes } from '../src/components/Banner/Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Commons/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const WithInfo: Story = {
  args: {
    type: BannerTypes.info,
    children: 'Info Banner',
  },
};

export const WithSuccess: Story = {
  args: {
    type: BannerTypes.success,
    children: 'Success Banner',
  },
};

export const WithWarning: Story = {
  args: {
    type: BannerTypes.warning,
    children: 'Warning Banner',
  },
};

export const WithError: Story = {
  args: {
    type: BannerTypes.error,
    children: 'Error Banner',
  },
};
