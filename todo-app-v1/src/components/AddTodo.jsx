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
        <input
            type="text" 
            placeholder="Add todo item here..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add Todo</button>

        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default AddTodo