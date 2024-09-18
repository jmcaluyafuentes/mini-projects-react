import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home-page">
        <h2>Welcome to Task Manager</h2>
        <Link to="/todo/add" className="button">Add Todo Item</Link>
        <Link to="/todo/list" className="view-link">View Todo List</Link>
    </div>
  )
}

export default Home