import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
        </select>
    </div>
  )
}

export default Filter