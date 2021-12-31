import React, { useState } from 'react';
import ListControls from './ListControls';
import TextArea from './TextArea';

import WordList from './WordList';

// function removeNonDictionaryWords(words) {}

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
  return -1;
};

const MainScreen = () => {
  const [textString, settextString] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  // const [removenonwords, setremovenonwords] = useState(false);

  const words = textString.split(' ');

  const wordsArray: WordsArrayType = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const indexOfWord = wordsArray.findIndex(
      (wordObject) => wordObject.word === word
    );

    console.log(indexOfWord, 'indexOfWord');
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

  // loop through words array and create object

  // if (removenonwords) words = removeNonDictionaryWords(words);

  // if (alphabeticalSort)
  // if (numericalSort)

  if (sortType) {
    if (sortType === 'alphabetical') {
      // words.sort(compareSortFunction);
      wordsArray.sort((a, b) => {
        const nameA = a.word.toUpperCase(); // ignore upper and lowercase
        const nameB = b.word.toUpperCase(); // ignore upper and lowercase

        return compareSortFunction(a, b, sortType, sortDirection);

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  }

  return (
    <div>
      <TextArea textString={textString} settextString={settextString} />
      <ListControls
        sortType={sortType}
        setSortType={setSortType}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />
      <WordList words={wordsArray} />
    </div>
  );
};

export default MainScreen;
