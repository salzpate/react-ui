import React from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import { PageSection } from '../src/';

describe('Thing', () => {
  test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container!);
    root.render(<PageSection headline="Headline" id="headline1" />);
    root.unmount();
  });
});
