import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ButtonLink from './ButtonLink';

describe('ButtonLink', () => {
  it('renders children content', () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<ButtonLink href="/test-url">Link</ButtonLink>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('renders with target blank and rel noreferrer', () => {
    render(
      <ButtonLink href="/test" target="_blank">
        External Link
      </ButtonLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('does not add rel attribute when target is not _blank', () => {
    render(
      <ButtonLink href="/test" target="_self">
        Link
      </ButtonLink>,
    );
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('rel');
  });

  it('applies custom className', () => {
    render(
      <ButtonLink href="/test" className="custom-class">
        Link
      </ButtonLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });
});
