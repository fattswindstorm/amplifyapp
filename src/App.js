import React from 'react';
import logo from './wildcard.png';
import './App.css';

function App() {
  return (
    <AmplifyProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi Sammy bb</h1>
        <h2>Another one</h2>
      </header>
    </div>
    </AmplifyProvider>
  );
}

export default App;