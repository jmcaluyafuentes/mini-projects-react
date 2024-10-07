import React, { useState } from 'react'

const AddTodo = () => {
    const [ value, setValue ] = useState('');
    const [ todos, setTodos ] = useState([]);

    const handleClick = (e) => {
        const value = e.target.value;
        const trimmedValue = value.trim('');
        setTodos([...todos, trimmedValue]);
        setValue('');
    }

    const handleKeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            handleClick(e);
        }
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className='page'>
            <input 
                type="text"
                value={value}
                placeholder='Add todo item...'
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeydown}
            />
            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default AddTodo