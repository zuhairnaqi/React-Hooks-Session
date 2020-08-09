import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('did mount count', count);
  }, []);

  useEffect(() => {
    console.log('count', count);
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        <button onClick={() => setCount(count)}>same change</button>
      </header>
    </div>
  );
}

export default App;
