import React, { PropsWithChildren } from "react";
import { Meta, Story } from '@storybook/react';
import SnackBar, { SnackBarProps, SnackBarTypes } from "../src/components/SnackBar/SnackBar";

export default {
  title: 'Components/Commons/SnackBar',
  component: SnackBar,
} as Meta;

const Template: Story<SnackBarProps> = (args) => <SnackBar {...args} />;

export const Info = Template.bind({});
Info.args = {
  text: 'Info Text',
  type: SnackBarTypes.info,
  closeSnackbar: () => {},
};

export const Error = Template.bind({});
Error.args = {
  text: 'Error Text',
  type: SnackBarTypes.error,
  closeSnackbar: () => {},
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Loading Text',
  type: SnackBarTypes.loading,
  closeSnackbar: () => {},
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success Text',
  type: SnackBarTypes.success,
  closeSnackbar: () => {},
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning Text',
  type: SnackBarTypes.warning,
  closeSnackbar: () => {},
};
