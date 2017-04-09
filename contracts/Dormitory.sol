pragma solidity ^0.4.2;


import "./Room.sol";

contract Dormitory is Owned {

    uint num;
    mapping (uint => Room) rooms;

    function Dormitory (uint _num) {
        num = _num;
    }

    function AddRoom (uint _num, uint capacity) onlyOwner {
        rooms[_num] = new Room(_num, capacity, num);
    }

    function GetRoom (uint _num) returns(Room) {
        return rooms[_num];
    }
}
