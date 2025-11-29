import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import OpenPageLink from './OpenPageLink';

describe('OpenPageLink', () => {
  it('renders with default text', () => {
    render(<OpenPageLink href="/test" />);
    expect(screen.getByText('Weitere Informationen')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<OpenPageLink href="/test" text="Custom Link Text" />);
    expect(screen.getByText('Custom Link Text')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<OpenPageLink href="/test-url" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('renders arrow icon', () => {
    const { container } = render(<OpenPageLink href="/test" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
