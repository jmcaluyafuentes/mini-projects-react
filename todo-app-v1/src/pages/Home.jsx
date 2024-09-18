import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
        <h2>Welcome to Task Manager</h2>
        <Link to="/todo" className="button">Add Todo item</Link>
    </div>
  )
}

export default Home