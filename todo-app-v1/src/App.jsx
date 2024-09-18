// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Todo from './pages/Todo'

function App() {

  return (
    <>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
