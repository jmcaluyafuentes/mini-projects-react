import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const options = [
    'apple',
    'banana',
    'guava',
    'kiwifruit'
  ]

  const [searchCriteria, setSearchCriteria] = useState([]);

  const handleSelection = (option) => {
    setSearchCriteria(prev => 
      prev.includes(option) ? prev.filter((p) => p !== option) : [...prev, option]
    )
  }

  useEffect(() => {
    console.log(searchCriteria);
  }, [searchCriteria]);

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input 
            type="checkbox" 
            value={option}
            checked={searchCriteria.includes(option)}
            onChange={() => handleSelection(option)}
          />
          {option}
        </label>
      ))}
    </div>
  )
}

export default App
