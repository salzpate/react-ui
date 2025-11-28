import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageLink from './PageLink';

describe('PageLink', () => {
  it('renders children content', () => {
    render(<PageLink href="/test">Link text</PageLink>);
    expect(screen.getByText('Link text')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<PageLink href="/test-url">Link</PageLink>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('applies custom className', () => {
    render(
      <PageLink href="/test" className="custom-class">
        Link
      </PageLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });

  it('passes through additional anchor attributes', () => {
    render(
      <PageLink href="/test" target="_blank" rel="noopener">
        Link
      </PageLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });
});
