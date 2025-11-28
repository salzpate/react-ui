import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactCard from './ContactCard';

describe('ContactCard', () => {
  const defaultProps = {
    name: 'Max Mustermann',
    imageSrc: '/test.jpg',
  };

  it('renders name', () => {
    render(<ContactCard {...defaultProps} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Max Mustermann');
  });

  it('renders image with correct src and alt', () => {
    render(<ContactCard {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Max Mustermann');
  });

  it('renders position when provided', () => {
    render(<ContactCard {...defaultProps} position="Geschäftsführer" />);
    expect(screen.getByText('Geschäftsführer')).toBeInTheDocument();
  });

  it('does not render position when not provided', () => {
    const { container } = render(<ContactCard {...defaultProps} />);
    expect(container.querySelector('.text-xs')).not.toBeInTheDocument();
  });

  it('renders street and town when provided', () => {
    render(<ContactCard {...defaultProps} street="Musterstraße 123" town="12345 Musterstadt" />);
    expect(screen.getByText('Musterstraße 123')).toBeInTheDocument();
    expect(screen.getByText('12345 Musterstadt')).toBeInTheDocument();
  });

  it('renders phone link when provided', () => {
    render(<ContactCard {...defaultProps} phone="030 123456" />);
    const phoneLink = screen.getByRole('link', { name: /030 123456/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:030123456');
  });

  it('renders fax link when provided', () => {
    render(<ContactCard {...defaultProps} fax="030 654321" />);
    const faxLink = screen.getByRole('link', { name: /030 654321/i });
    expect(faxLink).toHaveAttribute('href', 'tel:030654321');
  });

  it('renders email link when provided', () => {
    render(<ContactCard {...defaultProps} email="test@example.com" emailHref="mailto:test@example.com" />);
    const emailLink = screen.getByRole('link');
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
    expect(emailLink).toHaveAttribute('rel', 'nofollow');
    expect(emailLink).toHaveTextContent('test');
    expect(emailLink).toHaveTextContent('example.com');
  });

  it('applies custom className', () => {
    const { container } = render(<ContactCard {...defaultProps} className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('applies custom id', () => {
    const { container } = render(<ContactCard {...defaultProps} id="custom-id" />);
    expect(container.querySelector('#custom-id')).toBeInTheDocument();
  });

  it('applies default className when not provided', () => {
    const { container } = render(<ContactCard {...defaultProps} />);
    expect(container.querySelector('.bg-gray-200')).toBeInTheDocument();
  });
});
