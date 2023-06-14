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
});
