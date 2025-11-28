import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageSection from './PageSection';

describe('PageSection', () => {
  it('renders headline as h1 by default', () => {
    render(
      <PageSection id="test-section" headline="Main Headline">
        Content
      </PageSection>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Headline');
  });

  it('renders headline as h2 when subSection is true', () => {
    render(
      <PageSection id="test-section" headline="Sub Headline" subSection>
        Content
      </PageSection>,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sub Headline');
  });

  it('renders children content', () => {
    render(
      <PageSection id="test-section" headline="Headline">
        Test content
      </PageSection>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies id to section element', () => {
    const { container } = render(
      <PageSection id="custom-id" headline="Headline">
        Content
      </PageSection>,
    );
    expect(container.querySelector('#custom-id')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <PageSection id="test-section" headline="Headline" className="custom-class">
        Content
      </PageSection>,
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders ReactNode as headline', () => {
    render(
      <PageSection id="test-section" headline={<span>Custom Headline</span>}>
        Content
      </PageSection>,
    );
    expect(screen.getByText('Custom Headline')).toBeInTheDocument();
  });
});
