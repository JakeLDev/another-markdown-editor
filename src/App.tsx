import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';

import Home from './pages/Home';
import Test from './pages/Test';

import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
      <div className='App'>
        <Editor />
        {/* <Home />
        <Test /> */}
      </div>
  );
};

export default App;
