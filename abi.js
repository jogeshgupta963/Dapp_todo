const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'todos',
    outputs: [
      {
        name: 'description',
        type: 'string',
      },
      {
        name: 'completed',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xbc8bc2b4',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_description',
        type: 'string',
      },
    ],
    name: 'createTodo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xe34f1221',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_index',
        type: 'uint256',
      },
      {
        name: '_description',
        type: 'string',
      },
    ],
    name: 'updateText',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xcd111614',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'toggleCompleted',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x455f5024',
  },
]
module.exports = abi
