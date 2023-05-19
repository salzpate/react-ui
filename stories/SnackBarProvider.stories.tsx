import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SnackBarProvider from '../src/components/SnackBar/SnackBarProvider';

const meta: Meta<typeof SnackBarProvider> = {
  title: 'Components/Commons/SnackBarProvider',
  component: SnackBarProvider,
  decorators: [
    Component => (
      <SnackBarProvider>
        <Component />
      </SnackBarProvider>
    ),
  ],
};

function TestSnackBarComponent() {
  // const { openSnackbar } = useSnackBar();
  // const onButtonClick = () => openSnackbar('Test', SnackBarTypes.success, 8000);

  return <button>Hallo</button>;
}

export default meta;
type Story = StoryObj<typeof SnackBarProvider>;

export const Default: Story = {};
