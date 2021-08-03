import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const trackWord = screen.getByText(/track/i);
  expect(trackWord).toBeInTheDocument();
});

