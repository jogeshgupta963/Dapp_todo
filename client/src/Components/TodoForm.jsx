import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import Todo from './Todo'
import Web3 from 'web3/dist/web3.min.js'
import { init, createTodoOnChain, getTodo } from '../Web3Client'
function TodoForm() {
  const [todos, setTodos] = React.useState([])
  const newTodo = useRef('')

  const clickHandle = (e) => {
    e.preventDefault()

    createTodoOnChain(newTodo.current.value)
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
  async function web() {
    console.log(await getTodo(1))
    // const web3 = new Web3(
    //   new Web3.providers.HttpProvider('http://localhost:7545'),
    // )
    // // const abi = require('./abi.js')
    // const accounts = await web3.eth.getAccounts()
    // // console.log(accounts[0])
    // let balance = await web3.eth.getBalance(accounts[0])
    // balance = await web3.utils.fromWei(balance, 'ether')
    // console.log(balance)
  }
  // async function metaMask(){

  // }

  useEffect(() => {
    init()
  }, [])
  return (
    <div>
      <Form>
        <div onClick={web}>Hello</div>
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
