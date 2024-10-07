import React, { useState } from 'react'
import TodoList from '../pages/TodoList'

const AddTodo = ({ todos, setTodos }) => {
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

  return (
    <div className="add-todo">
        <div className="input-button-container">
            <input
                type="text" 
                placeholder="Add todo item here..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyDown={handleKeyDown}
                className="input"
            />
            <button onClick={addTodo} style={{ display: 'inline-block' }}>Add Todo</button>
        </div>

        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default AddTodo