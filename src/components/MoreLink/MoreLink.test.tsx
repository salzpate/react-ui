import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MoreLink from './MoreLink';

describe('MoreLink', () => {
  it('renders children content', () => {
    render(<MoreLink href="/test">Test content</MoreLink>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders default link text', () => {
    render(<MoreLink href="/test">Content</MoreLink>);
    expect(screen.getByText('Weitere Informationen')).toBeInTheDocument();
  });

  it('renders custom link text', () => {
    render(
      <MoreLink href="/test" linkText="Read More">
        Content
      </MoreLink>,
    );
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it('renders headline when provided', () => {
    render(
      <MoreLink href="/test" headline="Test Headline">
        Content
      </MoreLink>,
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Headline');
  });

  it('does not render headline when not provided', () => {
    render(<MoreLink href="/test">Content</MoreLink>);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders image when imgSrc is provided', () => {
    render(
      <MoreLink href="/test" headline="Headline" imgSrc="/test.jpg">
        Content
      </MoreLink>,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Headline');
  });

  it('wraps image in link', () => {
    render(
      <MoreLink href="/test-url" headline="Headline" imgSrc="/test.jpg">
        Content
      </MoreLink>,
    );
    const links = screen.getAllByRole('link');
    const imageLink = links.find(link => link.querySelector('img'));
    expect(imageLink).toHaveAttribute('href', '/test-url');
  });

  it('does not render image when imgSrc is not provided', () => {
    render(<MoreLink href="/test">Content</MoreLink>);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
