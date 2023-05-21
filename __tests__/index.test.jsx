import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page ', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders home page', () => {
    const homeHeading = screen.getByRole('heading', {
      name: /welcome to knitters notes/i,
    });
    expect(homeHeading).toBeInTheDocument();
  });

  it('renders three buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('Text');
    expect(buttons[1]).toHaveTextContent('Contained');
    expect(buttons[2]).toHaveTextContent('Outlined');
  });

  it('renders link', () => {
    const link = screen.getByRole('link', {
      name: /go to dashboard/i,
    });
    expect(link).toHaveAttribute('href', '/dashboard');
  });
});
