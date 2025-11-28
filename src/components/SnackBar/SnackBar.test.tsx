import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SnackBar, { SnackBarTypes } from './SnackBar';

describe('SnackBar', () => {
  it('renders text content', () => {
    const closeSnackbar = vi.fn();
    render(<SnackBar text="Test message" type={SnackBarTypes.info} closeSnackbar={closeSnackbar} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('has role alert for accessibility', () => {
    const closeSnackbar = vi.fn();
    render(<SnackBar text="Alert message" type={SnackBarTypes.info} closeSnackbar={closeSnackbar} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('calls closeSnackbar when close button is clicked', async () => {
    const user = userEvent.setup();
    const closeSnackbar = vi.fn();
    render(<SnackBar text="Test message" type={SnackBarTypes.info} closeSnackbar={closeSnackbar} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]);

    expect(closeSnackbar).toHaveBeenCalledTimes(1);
  });

  it('renders with success type styling', () => {
    const closeSnackbar = vi.fn();
    const { container } = render(<SnackBar text="Success" type={SnackBarTypes.success} closeSnackbar={closeSnackbar} />);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toHaveClass('border-teal-500', 'bg-teal-100', 'text-teal-700');
  });

  it('renders with error type styling', () => {
    const closeSnackbar = vi.fn();
    const { container } = render(<SnackBar text="Error" type={SnackBarTypes.error} closeSnackbar={closeSnackbar} />);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toHaveClass('border-red-400', 'bg-red-200', 'text-red-700');
  });

  it('renders with info type styling', () => {
    const closeSnackbar = vi.fn();
    const { container } = render(<SnackBar text="Info" type={SnackBarTypes.info} closeSnackbar={closeSnackbar} />);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toHaveClass('border-blue-500', 'bg-blue-100', 'text-blue-700');
  });

  it('renders with warning type styling', () => {
    const closeSnackbar = vi.fn();
    const { container } = render(<SnackBar text="Warning" type={SnackBarTypes.warning} closeSnackbar={closeSnackbar} />);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toHaveClass('border-orange-500', 'bg-orange-100', 'text-orange-700');
  });

  it('renders with loading type styling', () => {
    const closeSnackbar = vi.fn();
    const { container } = render(<SnackBar text="Loading" type={SnackBarTypes.loading} closeSnackbar={closeSnackbar} />);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toHaveClass('border-secondary', 'bg-secondary', 'text-gray-200');
  });

  it('renders close button with title', () => {
    const closeSnackbar = vi.fn();
    render(<SnackBar text="Test" type={SnackBarTypes.info} closeSnackbar={closeSnackbar} />);
    expect(screen.getByTitle('Close')).toBeInTheDocument();
  });
});
