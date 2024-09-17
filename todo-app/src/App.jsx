import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h3>Todo list</h3>
      {/* Add input field to accept user input */}
      <input
        type="text"
        placeholder="Add the todo item here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Todo input"
      />
      <button onClick={addTodo} aria-label="button to add todo item">Add</button>

      {/* Display todo list */}
      <ul>
        {todos.map((todo, index) => (
          <li key={(index)}>
            {todo}
            <button onClick={() => deleteTodo(index)} aria-label="button to delete a todo item">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App