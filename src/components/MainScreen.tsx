import React, { useState } from 'react';
import sw from 'stopword';
import ListControls from './ListControls';
import TextArea from './TextArea';
import './MainScreen.css';

import WordList from './WordList';

type WordObjectType = {
  word: string;
  value: number;
};

export type WordsArrayType = WordObjectType[];

const compareSortFunction = (
  a: WordObjectType,
  b: WordObjectType,
  sortType: string,
  sortDirection: string
) => {
  const isLowToHighSort = sortDirection === 'asc';

  if (sortType === 'alphabetical') {
    const nameA = a.word.toUpperCase(); // ignore upper and lowercase
    const nameB = b.word.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      if (isLowToHighSort) return -1;
      return 1;
    }
    if (nameA > nameB) {
      if (isLowToHighSort) return 1;
      return -1;
    }
    // names must be equal
    return 0;
  }

  const aValue: number = a.value;
  const bValue: number = b.value;

  if (isLowToHighSort) return Number(aValue) - Number(bValue);

  return Number(bValue) - Number(aValue);
};

const MainScreen = () => {
  const [textString, settextString] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const [removeNonWords, setRemoveNonWords] = useState(false);

  let words = textString.split(' ');

  const wordsArray: WordsArrayType = [];

  if (removeNonWords) words = sw.removeStopwords(words);

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (word) {
      const indexOfWord = wordsArray.findIndex(
        (wordObject) => wordObject.word === word
      );
      if (indexOfWord === -1) {
        wordsArray.push({
          word,
          value: 1,
        });
      } else {
        let { value } = wordsArray[indexOfWord];
        value += 1;
        wordsArray[indexOfWord] = { word, value };
      }
    }
  }

  // loop through words array and create object

  if (sortType) {
    wordsArray.sort((a, b) => {
      return compareSortFunction(a, b, sortType, sortDirection);
    });
  }

  return (
    <div className="main-screen">
      <TextArea textString={textString} settextString={settextString} />
      <ListControls
        sortType={sortType}
        setSortType={setSortType}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        removeNonWords={removeNonWords}
        setRemoveNonWords={setRemoveNonWords}
      />

      <WordList words={wordsArray} />
    </div>
  );
};

export default MainScreen;
