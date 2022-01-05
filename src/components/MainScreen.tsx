import React, { useState } from 'react';
import sw from 'stopword';
import ListControls from './ListControls';
import TextArea from './TextArea';
import './MainScreen.css';
import WordList from './WordList';
import { compareSortFunction, getScoreForWords } from '../utils';

const MainScreen = () => {
  const [textString, settextString] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  const [removeNonWords, setRemoveNonWords] = useState(false);

  let wordsFromText = textString.split(' ');
  if (removeNonWords) wordsFromText = sw.removeStopwords(wordsFromText);
  const words = getScoreForWords(wordsFromText);

  if (sortType) {
    words.sort((a, b) => {
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

      {!words.length ? (
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
        <WordList words={words} />
      )}
    </div>
  );
};

export default MainScreen;
