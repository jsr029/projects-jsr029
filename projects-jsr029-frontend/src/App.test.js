import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main application content', () => {
  render(<App />);
  
  // Verify that the core "Learn React" link is present to ensure the app mounts correctly
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});