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
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      addTodo();
    }
  }

  return (
    <div>
      {/* Add input field to add todo item */}
      <input 
        type="text"
        placeholder="Add todo item here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Todo input"
      />
      <button onClick={addTodo} aria-label="button to add todo item">Add</button>
      
      {/* Display the todo items */}
      <h3>Todo list:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)} aria-label="button to delete a todo item">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App