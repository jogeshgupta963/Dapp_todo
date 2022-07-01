import React from 'react'
import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import Todo from './Todo'
function TodoForm() {
  const [todos, setTodos] = React.useState([])
  const newTodo = useRef('')

  const clickHandle = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: newTodo.current.value,
        state: 'incomplete',
      },
    ])
  }

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const completeTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: 'complete' } : todo,
      ),
    )
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="createTodo">
          <Form.Control type="text" placeholder="Enter Todo" ref={newTodo} />
          <Button className="mt-3" onClick={clickHandle}>
            Create Todo
          </Button>
        </Form.Group>
        <Todo
          todos={todos}
          deleteTodos={deleteTodos}
          completeTodos={completeTodos}
        />
      </Form>
    </div>
  )
}

export default TodoForm
