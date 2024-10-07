import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ todos, setTodos }) => {

    const deleteTodo = (index) => {
        console.log(index)
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

  return (
    <div className="todo-list">
        <h2>Todo List</h2>
        <ol>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ol>
        <Link to="/" className="button" style={{ backgroundColor: "green" }}>Back to home</Link>
    </div>
  )
}

export default TodoList