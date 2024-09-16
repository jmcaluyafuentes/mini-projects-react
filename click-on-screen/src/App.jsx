import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [dots, setDots] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [cache, setCache] = useState([]);

  const clickScreen = ({ clientX: x, clientY: y}) => {
    const newDot = { id: nextId, x, y };
    setDots([...dots, newDot]);
    setNextId(nextId + 1);
  }

  const undo = () => {
    if (dots.length === 0) return;
    const lastDot = dots[dots.length-1];
    const updatedDots = dots.slice(0, -1);

    setDots(updatedDots);
    setCache([...cache, lastDot]);
  }

  return (
    <div>
      <div className="buttons-container">
        <button onClick={undo}>Undo</button>
        <button>Redo</button>
      </div>
      <div className="click-screen" onClick={clickScreen}>
        {dots.map(({id, x, y}) => (
          <div key={id} style={{ left: x, top: y }} className="dot"></div>
        ))}
      </div>
    </div>
  )
}

export default App
