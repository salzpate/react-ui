import { Meta, StoryObj } from '@storybook/react';
import SnackBar, { SnackBarTypes } from '../src/components/SnackBar/SnackBar';

const meta: Meta<typeof SnackBar> = {
  title: 'Components/Commons/SnackBar',
  component: SnackBar,
  argTypes: {
    closeSnackbar: {
      action: 'Close SnackBar clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SnackBar>;

export const Info: Story = {
  args: {
    text: 'Info Text',
    type: SnackBarTypes.info,
  },
};

export const Error: Story = {
  args: {
    text: 'Error Text',
    type: SnackBarTypes.error,
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading Text',
    type: SnackBarTypes.loading,
  },
};

export const Success: Story = {
  args: {
    text: 'Success Text',
    type: SnackBarTypes.success,
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning Text',
    type: SnackBarTypes.warning,
  },
};
