import { useState, useEffect } from 'react'
import './App.css'
import TaskInput from './TaskInput'
import Filter from './Filter';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  useEffect(() => {
    console.log(tasks);
  },[tasks])

  return (
    <>
      <div className="page">
        <Filter filter={filter} setFilter={setFilter} />
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}

export default App
