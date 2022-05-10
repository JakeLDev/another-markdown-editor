import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Test from './pages/Test';

import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
      <>
        <Home />
        <Test />
      </>
  );
};

export default App;
