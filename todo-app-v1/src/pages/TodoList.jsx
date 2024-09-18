import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ todos, setTodos }) => {

    const deleteTodo = (index) => {
        console.log(index)
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
        <Link to="/" className="button" style={{ backgroundColor: "green" }}>Back to home</Link>
    </div>
  )
}

export default TodoList