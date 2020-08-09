import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
