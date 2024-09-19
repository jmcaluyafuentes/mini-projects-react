import { useState, useEffect } from 'react';
import './App.css'
import Display from './Display'

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [decimalPoint, setDecimalPoint] = useState(0);

  const buttonPress = (e) => {
    const value = e.target.textContent;

    if (Number.isFinite(Number(value))) {
      constructNumber(value);
    } else if (value === '.') {
      console.log('decimal point')
      if (decimalPoint === 0) {
        setDecimalPoint(decimalPoint + 1);
        constructNumber(value);
      }
    }
  }

  const constructNumber = (value) => {
    setInputNumber(prev => prev + value);
  }

  useEffect(() => {
    console.log(inputNumber);
  }, [inputNumber]);

  return (
    <div className="calculator-container">
      <Display inputNumber={inputNumber}/>
      <div className="buttons-container">
        <button className="calc-button" onClick={buttonPress}>AC</button>
        <button className="calc-button" onClick={buttonPress}>+/-</button>
        <button className="calc-button" onClick={buttonPress}>%</button>
        <button className="calc-button" onClick={buttonPress}>/</button>
        <button className="calc-button" onClick={buttonPress}>7</button>
        <button className="calc-button" onClick={buttonPress}>8</button>
        <button className="calc-button" onClick={buttonPress}>9</button>
        <button className="calc-button" onClick={buttonPress}>X</button>
        <button className="calc-button" onClick={buttonPress}>4</button>
        <button className="calc-button" onClick={buttonPress}>5</button>
        <button className="calc-button" onClick={buttonPress}>6</button>
        <button className="calc-button" onClick={buttonPress}>-</button>
        <button className="calc-button" onClick={buttonPress}>1</button>
        <button className="calc-button" onClick={buttonPress}>2</button>
        <button className="calc-button" onClick={buttonPress}>3</button>
        <button className="calc-button" onClick={buttonPress}>+</button>
        <button className="calc-button" onClick={buttonPress}> </button>
        <button className="calc-button" onClick={buttonPress}>0</button>
        <button className="calc-button" onClick={buttonPress}>.</button>
        <button className="calc-button" onClick={buttonPress}>=</button>
      </div>
    </div>
  )
}

export default App
