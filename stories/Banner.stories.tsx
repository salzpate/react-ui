import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerTypes } from '../src/components/Banner/Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Commons/Banner',
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    type: BannerTypes.info,
    children: 'Info Banner',
  },
};

export const Success: Story = {
  args: {
    type: BannerTypes.success,
    children: 'Success Banner',
  },
};

export const Warning: Story = {
  args: {
    type: BannerTypes.warning,
    children: 'Warning Banner',
  },
};

export const Error: Story = {
  args: {
    type: BannerTypes.error,
    children: 'Error Banner',
  },
};
