// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/add" element={<AddTodo />} />
          <Route path="/todo/list" element={<TodoList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
