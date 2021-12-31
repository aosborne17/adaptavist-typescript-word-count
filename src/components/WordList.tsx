import { WordsArrayType } from './MainScreen';

interface WordListProps {
  words: WordsArrayType;
}

const WordList = ({ words }: WordListProps) => {
  return (
    <div>
      {words.map(({ word, value }) => (
        <div>
          <p>{word}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default WordList;
