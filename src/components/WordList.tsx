import { WordsArrayType } from './MainScreen';
import './WordList.css';

interface WordListProps {
  words: WordsArrayType;
}

const WordList = ({ words }: WordListProps) => {
  console.log(words, 'words');
  return (
    <div className="word-list">
      {words.map(({ word, value }) => (
        <div className="word-list-row">
          <p>{word}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default WordList;
