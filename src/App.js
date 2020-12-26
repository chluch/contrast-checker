import React from 'react';
import './App.css';
import HexInput from './component/HexInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="fg-text">Hello World</h1>
      </header>
      <main>
      <HexInput labelText="text" field="foreground" />
      <HexInput labelText="background" field="background"/>
      </main>
    </div>
  );
}

export default App;
