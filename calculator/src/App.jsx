import { useState, useEffect } from 'react';
import './App.css'
import Display from './Display'
import CalculatorButtons from './CalculatorButtons';

function App() {
  const [inputValue, setInputValue] = useState('0');
  const [decimalPointCounter, setDecimalPointCounter] = useState(0);
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [freshStart, setFreshStart] = useState(true);

  const buttonPress = (e) => {
    const value = e.target.textContent;

    if (freshStart) {
      setInputValue('');
      setFreshStart(false);
      calculator(value);
    } else {
      calculator(value);
    }
  }

  const calculator = (value) => {
    if (Number.isFinite(Number(value))) {
      if (operator === '') {
        constructNumber(value);
      } else {
        constructNumber(value);
      }
    } else if (value === '.') {
      if (decimalPointCounter === 0) {
        setDecimalPointCounter(decimalPointCounter + 1);
        constructNumber(value);
      }
    } else if (value === "/" || value === "X" || value === "-" || value === "+") {
      setFirstNumber(inputValue);
      setOperator(value);
      setInputValue(value);
      setDecimalPointCounter(0);
      setFreshStart(true);
    } else if (value === '=') {
      const result = calculate();
      setInputValue(result);
    } else if (value === 'AC') {
      reset();
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

  const reset = () => {
    setInputValue('0');
    setDecimalPointCounter(0);
    setFirstNumber('');
    setOperator('');
    setFreshStart(true);
  }

  return (
    <div className="calculator-container">
      <Display inputValue={inputValue}/>
      <CalculatorButtons buttonPress={buttonPress}/>
    </div>
  )
}

export default App
