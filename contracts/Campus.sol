pragma solidity ^0.4.2;

import "./Dormitory.sol";

contract Campus is Owned {
    
    mapping (address => Resident) roomContracts;
    mapping (uint => Dormitory) doms;
    
    function Campus() {
        
    }
    
    function AddDormitory(uint num) onlyOwner {
        doms[num] = new Dormitory(num);
    }
    
    function AddRoom(uint numDom, uint numRoom, uint capacity) onlyOwner {
        doms[numDom].AddRoom(numRoom, capacity);
    }
    
    function GetRoomInfo(uint numDom, uint numRoom) returns(uint capacity, uint occupancy, uint gender, bool isFound) {
        Room r = doms[numDom].GetRoom(numRoom);
        capacity = r.capacity();
        occupancy = r.occupancy();
        gender = uint(r.gender());
        isFound = r.added();
    }
}