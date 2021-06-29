/* eslint-disable jest/expect-expect */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import * as ReactDOM from 'react-dom';
import { PageSection } from '../src/';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageSection headline="Headline" id="headline1" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
