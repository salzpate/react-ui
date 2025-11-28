import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Banner from './Banner';

describe('Banner', () => {
  it('renders children content', () => {
    render(<Banner type="info">Test message</Banner>);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders with success type and correct styling', () => {
    const { container } = render(<Banner type="success">Success message</Banner>);
    const banner = container.querySelector('[role="alert"]');
    expect(banner).toHaveClass('border-teal-500', 'bg-teal-100', 'text-teal-700');
  });

  it('renders with error type and correct styling', () => {
    const { container } = render(<Banner type="error">Error message</Banner>);
    const banner = container.querySelector('[role="alert"]');
    expect(banner).toHaveClass('border-red-400', 'bg-red-200', 'text-red-700');
  });

  it('renders with info type and correct styling', () => {
    const { container } = render(<Banner type="info">Info message</Banner>);
    const banner = container.querySelector('[role="alert"]');
    expect(banner).toHaveClass('border-blue-500', 'bg-blue-100', 'text-blue-700');
  });

  it('renders with warning type and correct styling', () => {
    const { container } = render(<Banner type="warning">Warning message</Banner>);
    const banner = container.querySelector('[role="alert"]');
    expect(banner).toHaveClass('border-orange-500', 'bg-orange-100', 'text-orange-700');
  });

  it('has role alert for accessibility', () => {
    render(<Banner type="info">Alert message</Banner>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
