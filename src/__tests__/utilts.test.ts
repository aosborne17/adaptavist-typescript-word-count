import { getScoreForWords } from '../utils';

/* global test, expect */

// testing compareSortFunction
test('testing compare sort function', () => {
  const words = ['apple', 'bear', 'apple', 'grape'];

  const wordsScore = getScoreForWords(words);

  const appleScore = wordsScore.find((word) => word.word === 'apple');

  expect(wordsScore.length).toBe(3);
  expect(appleScore?.value).toBe(2);
});
