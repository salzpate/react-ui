/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PageSection } from '../src/';

describe('Thing', () => {
  test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<PageSection headline="Headline" id="headline1" />);
    root.unmount();
  });
});
