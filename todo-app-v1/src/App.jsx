import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/add" element={<AddTodo todos={ todos } setTodos={ setTodos } />} />
          <Route path="/todo/list" element={<TodoList todos={ todos } setTodos={ setTodos }/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
