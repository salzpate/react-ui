import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FooterLink from './FooterLink';

describe('FooterLink', () => {
  it('renders children content', () => {
    render(
      <FooterLink href="/test" activeMenu="home">
        Footer Link
      </FooterLink>,
    );
    expect(screen.getByText('Footer Link')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(
      <FooterLink href="/test-url" activeMenu="test">
        Link
      </FooterLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('renders with target attribute', () => {
    render(
      <FooterLink href="/test" activeMenu="test" target="_blank">
        External Link
      </FooterLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
