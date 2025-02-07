import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <div className="tasks-container">
        <ul className="tasks">
            {tasks.map((task, index) => (
                <li key={index} className='task'>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span>{task.status}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList