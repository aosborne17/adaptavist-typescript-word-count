import { render, screen } from '@testing-library/react';
import TextArea from '../components/TextArea';

/* global test, expect */

test('renders text field', () => {
  render(<TextArea />);

  const textFieldElement = screen.getByPlaceholderText('Add your words');
  expect(textFieldElement).toBeInTheDocument();
});
