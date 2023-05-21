import { render } from '@testing-library/react';
import Dashboard from '../app/dashboard/page';

it('renders dashboard page unchanged', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});
