import React, { useState } from 'react';
import sw from 'stopword';
import ListControls from './ListControls';
import TextArea from './TextArea';
import './MainScreen.css';

import WordList from './WordList';
import { WordsArrayType } from '../types';
import compareSortFunction from '../utils';

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

      {!wordsArray.length ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <p>Start typing in the textbox to generate your word list</p>
        </div>
      ) : (
        <WordList words={wordsArray} />
      )}
    </div>
  );
};

export default MainScreen;
