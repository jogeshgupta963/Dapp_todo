import Web3 from 'web3/dist/web3.min.js'
import TodoContractBuild from './TodoList.json'

var selectedAccount
var todoContract
const init = async () => {
  const provider = window.ethereum
  if (typeof provider !== 'undefined') {
    //metamask is installed
    // connect metamask
    provider
      .request({
        method: 'eth_requestAccounts',
      })
      .then((accounts) => {
        selectedAccount = accounts[0]
        console.log(`selected account: ${selectedAccount}`)
      })
      .catch((err) => {
        console.log(err)
      })
    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0]
      console.log(`selected account changed to ${selectedAccount}`)
    })
    const web3 = new Web3(provider)
    const networkId = await web3.eth.net.getId()
    todoContract = new web3.eth.Contract(
      TodoContractBuild.abi,
      // TodoContractBuild.networks[networkId].address,
      '0x9d8b612dcCD4A22238CFBA3dD4B50cDc1305f61E',
    )
  }
}

async function createTodoOnChain(description) {
  todoContract.methods.createTodo(description).send({ from: selectedAccount })
}
async function getTodo(id) {
  const todo = await todoContract.methods
    .todos(id)
    .call({ from: selectedAccount })
  return todo
}
export { init, createTodoOnChain, getTodo }
