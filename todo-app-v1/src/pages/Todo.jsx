import React from 'react'

const Todo = () => {
    const todos = [
        "one",
        "two",
        "three"
    ]

  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo