// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    struct Todo{
        string description;
        bool completed;
    }
    Todo[] public todos;

    function createTodo(string memory _description) public{
        todos.push(Todo(_description,false));
    }
    function updateText(uint _index,string memory _description) public {
        todos[_index].description = _description;
    }
    function toggleCompleted(uint _index) public{
        todos[_index].completed = !todos[_index].completed;
    }
}