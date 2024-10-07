import React, { useState } from 'react'

const AddTodo = () => {
    const [ value, setValue ] = useState('');
    const [ todos, setTodos ] = useState([]);

    const handleClick = (e) => {
        const value = e.target.value;
        const trimmedValue = value.trim('');
        setTodos([...todos, trimmedValue]);
    }

    const handleKeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            handleClick(e);
        }
    }

    return (
        <div>
            <input 
                type="text"
                value={value}
                placeholder='Input todo item...'
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeydown}
            />
            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ol>
        </div>
    )
}

export default AddTodo