import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ todos }) => {

  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
        <Link to="/" className="button" style={{ backgroundColor: "green" }}>Back to home</Link>
    </div>
  )
}

export default TodoList