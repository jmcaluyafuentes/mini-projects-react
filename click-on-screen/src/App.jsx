import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [dots, setDots] = useState([]);

  const clickScreen = ({ clientX: x, clientY: y}) => {
    const newDot = { x, y };
    setDots([...dots, newDot]);
  }

  return (
    <div>
      <div className="buttons-container">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="click-screen" onClick={clickScreen}>
        {dots.map(({x, y}) => (
          <div key={x+y} style={{ left: x, top: y }} className="dot"></div>
        ))}
      </div>
    </div>
  )
}

export default App
