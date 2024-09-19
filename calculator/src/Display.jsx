import React, { useState, useEffect } from 'react'

const Display = () => {
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput('1 + 2');
    }, [])

  return (
    <div className="display">
        {input}
    </div>
  )
}

export default Display