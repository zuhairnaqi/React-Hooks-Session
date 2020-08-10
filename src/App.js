import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';
import Form from './Components/Form';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        <Form />
        {/* <Counter1 />
        <Counter2 /> */}
      </header>
    </div>
  );
}

export default App;
