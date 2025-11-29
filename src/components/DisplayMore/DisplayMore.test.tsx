import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import DisplayMore from './DisplayMore';

describe('DisplayMore', () => {
  it('initially hides content and shows button', () => {
    render(<DisplayMore>Hidden content</DisplayMore>);
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Mehr' })).toBeInTheDocument();
  });

  it('shows content when button is clicked', async () => {
    const user = userEvent.setup();
    render(<DisplayMore>Hidden content</DisplayMore>);

    await user.click(screen.getByRole('button', { name: 'Mehr' }));

    expect(screen.getByText('Hidden content')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('uses custom label', () => {
    render(<DisplayMore label="Show More">Content</DisplayMore>);
    expect(screen.getByRole('button', { name: 'Show More' })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DisplayMore className="custom-class" id="test-id">
        Content
      </DisplayMore>,
    );
    expect(container.querySelector('#test-id')).toHaveClass('custom-class');
  });

  it('applies custom id', () => {
    const { container } = render(<DisplayMore id="custom-id">Content</DisplayMore>);
    expect(container.querySelector('#custom-id')).toBeInTheDocument();
  });
});
