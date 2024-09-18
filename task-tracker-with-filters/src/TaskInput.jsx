import React, { useState, useEffect } from 'react'

const TaskInput = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = ({ title, description, status });
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        setStatus('Pending');
    }

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

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
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default TaskInput