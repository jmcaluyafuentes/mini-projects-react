import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Home = () => {
  return (
    <div id='home'>
        <h1>Task Manager</h1>
        <Link to='/todo/add'>Add Todo Item</Link>
        <Link to='/todo/list'>See Todo List</Link>
    </div>
  )
}

export default Home