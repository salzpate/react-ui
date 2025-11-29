import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NavLink from './NavLink';

describe('NavLink', () => {
  it('renders children content', () => {
    render(
      <NavLink href="/test" activeMenu="home">
        Home
      </NavLink>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(
      <NavLink href="/test-url" activeMenu="test">
        Link
      </NavLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-url');
  });

  it('applies active className when activeMenu matches activeMenuName', () => {
    render(
      <NavLink href="/test" activeMenu="home" activeMenuName="home">
        Home
      </NavLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-gray-300');
  });

  it('applies default className when activeMenu does not match activeMenuName', () => {
    render(
      <NavLink href="/test" activeMenu="about" activeMenuName="home">
        Home
      </NavLink>,
    );
    const link = screen.getByRole('link');
    expect(link).not.toHaveClass('bg-gray-300');
  });

  it('applies default className when activeMenuName is not provided', () => {
    render(
      <NavLink href="/test" activeMenu="home">
        Home
      </NavLink>,
    );
    const link = screen.getByRole('link');
    expect(link).not.toHaveClass('bg-gray-300');
  });
});
