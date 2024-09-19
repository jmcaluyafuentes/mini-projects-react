import { useState, useEffect } from 'react';
import './App.css'
import Display from './Display'
import CalculatorButtons from './CalculatorButtons';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [decimalPoint, setDecimalPoint] = useState(0);
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setoperator] = useState('');

  const buttonPress = (e) => {
    const value = e.target.textContent;

    if (Number.isFinite(Number(value))) {
      if (operator === '') {
        constructNumber(value);
      } else {
        setInputValue('');
        constructNumber(value);
      }
    } else if (value === '.') {
      if (decimalPoint === 0) {
        setDecimalPoint(decimalPoint + 1);
        constructNumber(value);
      }
    } else if (value === "/" || value === "X" || value === "-" || value === "+") {
      setFirstNumber(inputValue);
      setoperator(value);
      setInputValue(value);
      setDecimalPoint(0);
    } else if (value === '=') {
      const result = calculate();
      setInputValue(result);
    }
  }

  const constructNumber = (value) => {
    setInputValue(prev => prev + value);
  }

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const calculate = () => {
    const num1 = Number(firstNumber);
    const num2 = Number(inputValue);
    
    let result;

    console.log(operator);
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '/':
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          console.error('Cannot divide by zero')
          result = 'Error: Cannot divide by zero';
        }
        break;
      default:
        console.error('Invalid operator')
        result = 'Error';
    }

    return result;
  }

  return (
    <div className="calculator-container">
      <Display inputValue={inputValue}/>
      <CalculatorButtons buttonPress={buttonPress}/>
    </div>
  )
}

export default App
