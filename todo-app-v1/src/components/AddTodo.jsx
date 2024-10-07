import React, { useState } from 'react'

const AddTodo = () => {
    const [ value, setValue ] = useState('');
    const [ todos, setTodos ] = useState([]);

    const handleClick = () => {
        const trimmedValue = value.trim('');
        if (trimmedValue) {    
            setTodos([...todos, trimmedValue]);
            setValue('');
        }
    }

    const handleKeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            handleClick();
        }
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className='page'>
            <div>
                <input 
                    type="text"
                    value={value}
                    placeholder='Add todo item...'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeydown}
                    />
                <button onClick={handleClick}>Add</button>
            </div>
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