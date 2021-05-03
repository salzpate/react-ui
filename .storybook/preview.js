import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';

import "../src/styles/tailwind.css"

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    push() {}
  })
);
