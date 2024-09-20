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

  // TODO: If result is 'Error', attempting for another calculation must result to "Error: Not a valid operation
  // TODO: If inputValue has no decimal places, the display must have no decimal places.

  const buttonPress = (e) => {
    const value = e.target.textContent;

    if (freshStart) {
      setInputValue('');
      setFreshStart(false);
    } 
    calculator(value);
  }

  const calculator = (value) => {
    if (Number.isFinite(Number(value))) {
      constructNumber(value);
    } else if (['+', '-', 'X', '/'].includes(value)) {
      if (inputValue.includes('Error')) {
        setInputValue('Invalid operation');
      }
      setFirstNumber(inputValue);
      setOperator(value);
      setInputValue(value);
      setDecimalPointCounter(0);
      setFreshStart(true);
    } else if (value === '=') {
      const result = calculate();
      setInputValue(result.toString());
    } else if (value === 'AC') {
      reset();
    }
  }

  const constructNumber = (value) => {
    if (value === '.') {
      // If there's already a decimal point, do nothing
      if (decimalPointCounter > 0) return;
      setDecimalPointCounter(decimalPointCounter + 1);
    }
    setInputValue(prev => prev === '0' ? value : prev + value);
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
        result = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Error: Cannot divide by zero';
        break;
      default:
        result = 'Error: Invalid operation';
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
