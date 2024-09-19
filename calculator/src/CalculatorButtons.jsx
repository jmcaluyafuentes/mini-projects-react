import React from 'react'

const CalculatorButtons = ({ buttonPress }) => {
  return (
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
  )
}

export default CalculatorButtons