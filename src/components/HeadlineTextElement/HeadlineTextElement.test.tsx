import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeadlineTextElement from './HeadlineTextElement';

describe('HeadlineTextElement', () => {
  it('renders headline', () => {
    render(<HeadlineTextElement headline="Test Headline">Content</HeadlineTextElement>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Headline');
  });

  it('renders children content', () => {
    render(<HeadlineTextElement headline="Headline">Test content</HeadlineTextElement>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders image when imgSrc is provided', () => {
    render(
      <HeadlineTextElement headline="Headline" imgSrc="/test.jpg">
        Content
      </HeadlineTextElement>,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Headline');
  });

  it('does not render image when imgSrc is not provided', () => {
    render(<HeadlineTextElement headline="Headline">Content</HeadlineTextElement>);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders ReactNode as headline', () => {
    render(
      <HeadlineTextElement headline={<span>Custom Headline</span>}>
        <p>Content</p>
      </HeadlineTextElement>,
    );
    expect(screen.getByText('Custom Headline')).toBeInTheDocument();
  });
});
