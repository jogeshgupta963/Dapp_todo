// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract TodoList {

    uint public taskCount;
    struct Todo{
        uint id;
        string title;
        string description;
        bool completed;
    }
    mapping(uint => Todo) public tasks;
    // Todo[] public tasks;

    constructor() public {
        createTask("dummy Task", "Lorem");
    }

    function createTask(string memory _title , string memory _description) public{

        Todo memory newTask = Todo(taskCount,_title,_description,false);
        tasks[taskCount]= newTask;
        taskCount++;
        // todos[_id] = newTask;
        // tasks.push(newTask);
    }
}