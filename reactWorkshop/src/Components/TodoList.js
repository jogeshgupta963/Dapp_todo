import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {

    const [todos, settodos] = useState([]);

    // add a todo 
    const addTodo = todo => {
        const newTodos = [todo, ...todos];

        settodos(newTodos);
        console.log(...todos);
    };

    // update todo 
    const updateTodo = (todoId, newValue) => {
        settodos(prev => prev.map(item => (item.id===todoId ? newValue : item)));
    }

    // remove todo
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id!==id);
        settodos(removeArr);
    }

  return (
    <div>
        <h1>Todo App</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList