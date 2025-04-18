import React from 'react';
import FscMoodlet from './components/FscMoodlet';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FSC Moodlet Demo</h1>
        
        <div className="demo-section">
          <h2>Letter Display Mode</h2>
          <div className="moodlet-group">
            <FscMoodlet type="F" />
            <FscMoodlet type="S" />
            <FscMoodlet type="C" />
          </div>
        </div>
        
        <div className="demo-section">
          <h2>Word Display Mode</h2>
          <div className="moodlet-group">
            <FscMoodlet type="F" displayMode="word" />
            <FscMoodlet type="S" displayMode="word" />
            <FscMoodlet type="C" displayMode="word" />
          </div>
        </div>
        
        {/* <div className="demo-section">
          <h2>Mixed States</h2>
          <div className="moodlet-group">
            <FscMoodlet type="F" displayMode="letter" initialState="completed" />
            <FscMoodlet type="S" displayMode="letter" initialState="current" />
            <FscMoodlet type="C" displayMode="letter" initialState="not required" />
          </div>
        </div> */}
        
        <div className="instructions">
          <p><strong>Instructions:</strong></p>
          <ul>
            <li>Left click to cycle through states</li>
            <li>Right click to toggle between required/not required</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;