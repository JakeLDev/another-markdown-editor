import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <textarea style={{resize: "none", backgroundColor: "grey", width: "200px", height: "1000px"}} autoFocus placeholder="type here idiot">

        </textarea>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TextField text="pog"/>
    </div>
  );
};

export default App;
