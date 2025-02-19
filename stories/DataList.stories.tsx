import { Meta, StoryObj } from '@storybook/react';
import { DataList } from '../src';

const meta: Meta<typeof DataList> = {
  title: 'Components/Commons/DataList',
  component: DataList,
};

export default meta;
type Story = StoryObj<typeof DataList>;

export const Default: Story = {
  args: {
    headline: 'id1',
    children: 'Content',
  },
};
