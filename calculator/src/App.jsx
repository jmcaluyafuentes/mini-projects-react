import { useState, useEffect } from 'react';
import './App.css'
import Display from './Display'
import CalculatorButtons from './CalculatorButtons';

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
      <CalculatorButtons buttonPress={buttonPress}/>
    </div>
  )
}

export default App
