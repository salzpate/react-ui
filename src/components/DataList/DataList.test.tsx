import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DataList from './DataList';

describe('DataList', () => {
  it('renders headline', () => {
    render(<DataList headline="Test Headline">Content</DataList>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Headline');
  });

  it('renders children content', () => {
    render(<DataList headline="Headline">Test content</DataList>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders ReactNode as headline', () => {
    render(
      <DataList headline={<span>Custom Headline</span>}>
        <p>Content</p>
      </DataList>,
    );
    expect(screen.getByText('Custom Headline')).toBeInTheDocument();
  });
});
