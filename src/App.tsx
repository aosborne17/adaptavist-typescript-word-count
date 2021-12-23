import { TextField } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <div>
      hi
      <TextField
        id="outlined-multiline-flexible"
        multiline
        placeholder="Add your words"
        // maxRows={4}
        // value={value}
        // onChange={handleChange}
      />
    </div>
  );
};

export default App;
