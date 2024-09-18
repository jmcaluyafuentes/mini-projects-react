import React, { useState, useEffect } from 'react'

const TaskInput = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('Pending');
    }

  return (
    <div className="task-input">
        <form onSubmit={handleSubmit} className="task-input-form">
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"

            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ height: "100px" }}
            />
            <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit" style={{ marginTop: "10px" }}>Add Task</button>
        </form>
    </div>
  )
}

export default TaskInput