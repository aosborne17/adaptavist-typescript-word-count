import { render, screen } from '@testing-library/react';
import App from '../App';

/* global test, expect */

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi/i);
  expect(linkElement).toBeInTheDocument();

  const textFieldElement = screen.getByPlaceholderText('Add your words');
  expect(textFieldElement).toBeInTheDocument();
});

test('renders text field', () => {
  render(<App />);

  const textFieldElement = screen.getByPlaceholderText('Add your words');
  expect(textFieldElement).toBeInTheDocument();
});
