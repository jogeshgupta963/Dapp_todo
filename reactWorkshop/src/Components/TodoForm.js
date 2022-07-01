import React, { useState } from 'react'

const TodoForm = (props) => {

    const [input, setinput] = useState('');


    const handleChange = e => {
        setinput(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setinput('');
        // console.log(input);
    };

  return (
    <div>
        <form>
            <input type="text" placeholder='Add a Todo' value={input} name="input" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Add a Todo</button>
        </form>
    </div>
  )
}

export default TodoForm