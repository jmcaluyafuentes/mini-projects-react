import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [dots, setDots] = useState([]);
  const [nextId, setNextId] = useState(1);

  const clickScreen = ({ clientX: x, clientY: y}) => {
    const newDot = { nextId, x, y };
    setDots([...dots, newDot]);
    setNextId(nextId + 1);
  }

  return (
    <div>
      <div className="buttons-container">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="click-screen" onClick={clickScreen}>
        {dots.map(({nextId, x, y}) => (
          <div key={nextId} style={{ left: x, top: y }} className="dot">{console.log(nextId)}</div>
        ))}
      </div>
    </div>
  )
}

export default App
