import { TextField } from '@mui/material';
import React from 'react';

interface TextAreaProps {
  textString: string;
  settextString: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = ({ textString, settextString }: TextAreaProps) => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      multiline
      placeholder="Add your words"
      value={textString}
      onChange={(e) => settextString(e.target.value)}
    />
  );
};

export default TextArea;
