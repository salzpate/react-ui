import React from 'react';
import * as ReactDOM from 'react-dom';
import PageSection from '../src/components/PageSection';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageSection headline="Headline" id="headline1" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
