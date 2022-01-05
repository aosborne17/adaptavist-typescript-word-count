import { getAllByTestId, render } from '@testing-library/react';
import WordList from '../components/WordList';

/* global test, expect */

const words = [
  { word: 'test', value: 2 },
  { word: 'andrew', value: 7 },
  { word: 'age', value: 1 },
];

test('there should be as many rows as there are words', () => {
  render(<WordList words={words} />);
  const listItems = getAllByTestId(document.body, 'word-list-row');
  expect(listItems).toHaveLength(3);
});
