import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from '../app/dashboard/page';

describe('Dashboard', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders cards', () => {
    const cards = screen.getAllByText('Project', { exact: false });
    expect(cards).toHaveLength(3);
  });
});
