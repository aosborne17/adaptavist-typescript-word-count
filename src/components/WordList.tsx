import { Card } from '@mui/material';
import { motion } from 'framer-motion';
import { WordsArrayType } from '../types';
import './WordList.css';

interface WordListProps {
  words: WordsArrayType;
}

const WordList = ({ words }: WordListProps) => {
  console.log(words, 'words');
  return (
    <div className="word-list">
      {words.map(({ word, value }) => (
        <motion.div layout>
          <Card className="word-list-row fade-in">
            <p>{word}</p>
            <p>{value}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default WordList;
