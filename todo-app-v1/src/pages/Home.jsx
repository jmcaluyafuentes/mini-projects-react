import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='page'>
        <h1>Task Manager</h1>
        <Link to='/todo/add'>Add Todo Item</Link>
        <Link to='/todo/list'>See Todo List</Link>
    </div>
  )
}

export default Home