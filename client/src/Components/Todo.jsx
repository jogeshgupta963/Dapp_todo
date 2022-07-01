import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
function Todo({ todos, deleteTodos, completeTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Row className="mt-3">
            <Col md={1}>{todo.id}</Col>
            <Col
              className={todo.state === 'complete' ? 'text-success h5' : 'h5'}
            >
              {todo.todo}
            </Col>
            <Col>
              <Button
                variant="danger"
                onClick={() => deleteTodos(todo.id)}
                className="mx-2"
              >
                Delete
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() => completeTodos(todo.id)}
              >
                completed
              </Button>

              {/* <Button variant="warning">Delete</Button> */}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  )
}

export default Todo
