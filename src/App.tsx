import React, { useState } from 'react';
import './App.css';
import { initWorld, displayWorld, timestep } from "./world";

const App = () => {
    const [world, setWorld] = useState(initWorld());
    return (
        <div className="App">
            <header className="App-header">
                {displayWorld(world)}
                <button onClick={() => setWorld(timestep(world))}>Timestep</button>
            </header>
        </div>

    );
}

export default App;
