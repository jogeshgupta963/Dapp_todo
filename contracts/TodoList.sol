// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract TodoList {

    uint public taskCount;
    struct Todo{
        string title;
        string description;
        bool completed;
    }
    // Todo[] public tasks;

}