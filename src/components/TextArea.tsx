import { TextField } from '@mui/material';
import React from 'react';

interface TextAreaProps {
  textString: string;
  settextString: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = ({ textString, settextString }: TextAreaProps) => {
  return (
    <TextField
      inputProps={{ 'data-testid': 'text-area' }}
      style={{ width: '100%' }}
      multiline
      placeholder="Start typing..."
      value={textString}
      onChange={(e) => settextString(e.target.value)}
    />
  );
};

export default TextArea;
