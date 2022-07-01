import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList'

const Todo = ({todos, updateTodo, removeTodo}) => {

    const [edit, setedit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setedit({
            id: null,
            value: ''
        });
    };

    if(edit.id){
        return <TodoForm onSubmit={submitUpdate}></TodoForm>
    }

  return todos.map((todo, index) => (
    <div key={index}>
        <div key={todo.id}>
            {todo.text}
        </div>
        <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
        <button onClick={() => setedit({id: todo.id, value: todo.text})}>Edit Todo</button>
    </div>
  ))
}

export default Todo