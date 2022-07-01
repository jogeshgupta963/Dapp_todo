import React from 'react'
import TodoForm from './TodoForm'
import { Container } from 'react-bootstrap'

function TodoList() {
  return (
    <Container
      className="mt-5"
      style={{
        maxWidth: '50%',
        margin: 'auto ',
      }}
    >
      <h1>Todo</h1>
      <TodoForm />
    </Container>
  )
}

export default TodoList
