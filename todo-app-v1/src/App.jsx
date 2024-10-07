import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

const App = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/todo/add' element={<AddTodo />} />
        </Routes>
    </>
  )
}

export default App