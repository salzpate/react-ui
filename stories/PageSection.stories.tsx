import { Meta, StoryObj } from '@storybook/react';
import PageSection from '../src/components/PageSection/PageSection';

const meta: Meta<typeof PageSection> = {
  title: 'Components/Commons/PageSection',
  component: PageSection,
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    subSection: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  args: {
    id: 'id1',
    headline: 'Headline 1',
  },
};

export const WithSubSection: Story = {
  args: {
    id: 'id2',
    headline: 'Headline 2',
    subSection: true,
  },
};

export const WithClassName: Story = {
  args: {
    id: 'id3',
    headline: 'Headline 3',
    className: 'bg-blue-500',
  },
};
