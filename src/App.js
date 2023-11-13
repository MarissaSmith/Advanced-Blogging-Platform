// Import necessary libraries and components
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';  // Import your connected component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      {/* Use your connected component */}
      <Counter />
    </div>
  );
}

export default App;

