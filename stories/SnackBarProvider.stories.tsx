import React from 'react';
import { Meta, Story } from '@storybook/react';
import SnackBarProvider from '../src/components/SnackBar/SnackBarProvider';

export default {
  title: 'Components/Commons/SnackBarProvider',
  component: SnackBarProvider,
  decorators: [
    Story => (
      <SnackBarProvider>
        <Story />
      </SnackBarProvider>
    ),
  ],
} as Meta;

function TestSnackBarComponent() {
  // const { openSnackbar } = useSnackBar();
  // const onButtonClick = () => openSnackbar('Test', SnackBarTypes.success, 8000);

  return <button>Hallo</button>;
}

const Template: Story = () => <TestSnackBarComponent />;

export const Default = Template.bind({});
