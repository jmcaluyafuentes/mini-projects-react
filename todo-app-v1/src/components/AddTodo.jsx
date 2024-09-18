import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddTodo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    const handleKeyDown = ({ key }) => {
        if (key === "Enter") {
            addTodo();
        }
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

  return (
    <div className="add-todo">
        <input
            type="text" 
            placeholder="Add todo item here..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add Todo</button>

        <h3>Todo List</h3>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete Todo</button>
                </li>
            ))}
        </ul>

        <Link to="/" className="button">Back to Home</Link>
    </div>
  )
}

export default AddTodo