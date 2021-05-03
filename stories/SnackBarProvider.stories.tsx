import React from "react";
import { Meta, Story } from "@storybook/react";
import SnackBarProvider, { useSnackBar } from "../src/components/SnackBar/SnackBarProvider";
import { SnackBarTypes } from "../src/components/SnackBar/SnackBar";

export default {
  title: 'Components/Commons/SnackBarProvider',
  component: SnackBarProvider,
  decorators: [
    (Story) => (
      <SnackBarProvider>
        <Story />
      </SnackBarProvider>
    ),
  ],
} as Meta;

function TestSnackBarComponent () {
  const { openSnackbar } = useSnackBar();
  const onButtonClick = () => openSnackbar('Test', SnackBarTypes.success, 8000);

  return <button onClick={onButtonClick}>Hallo</button>;
}

const Template: Story = () => <TestSnackBarComponent />;

export const Default = Template.bind({});
