import React from 'react'

const App = () => {
  const todos = [
    "cook lambshank",
    "dinner",
    "wash plates"
  ]

  return (
    <div>
      <h3>Todo list</h3>
      {/* Display todo list */}
      <ul>
        {todos.map((todo, index) => (
          <li key={(index)}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App