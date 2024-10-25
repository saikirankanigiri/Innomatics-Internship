import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to the Student Management Portal/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders register link', () => {
  render(<App />);
  const registerLink = screen.getByText(/Register Student/i);
  expect(registerLink).toBeInTheDocument();
});

// You can add more tests for different routes or functionalities as needed