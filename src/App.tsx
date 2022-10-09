import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initWorld, timestep, displayWorld, World } from "./world";
import { Agent } from "./agent";

function App() {
  var world = initWorld();

  return (
    <div className="App">
      <header className="App-header">
        {displayWorld(world)}
      </header>
    </div>
  );
}

export default App;
