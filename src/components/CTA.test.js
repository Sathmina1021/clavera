import { render, screen } from '@testing-library/react';
import CTA from './CTA';

test('renders CTA component with heading', () => {
  render(<CTA />);
  const headingElement = screen.getByText(/Start Your Dream Journey Today/i);
  expect(headingElement).toBeInTheDocument();
});
