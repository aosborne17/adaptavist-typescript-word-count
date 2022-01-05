import { Card } from '@mui/material';
import FlipMove from 'react-flip-move';
import { WordsArrayType } from '../types';
import './WordList.css';

interface WordListProps {
  words: WordsArrayType;
}

const WordList = ({ words }: WordListProps) => {
  return (
    <div className="word-list">
      <FlipMove>
        {words.map(({ word, value }) => (
          <div data-testid="word-list-row" key={word}>
            <Card className="word-list-row">
              <p>{word}</p>
              <p className="value-text">{value}</p>
            </Card>
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default WordList;
