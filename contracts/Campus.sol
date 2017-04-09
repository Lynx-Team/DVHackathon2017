pragma solidity ^0.4.2;

import "./Dormitory.sol";

contract Campus is Owned {

    mapping (string => Resident) residents;
    mapping (uint => Dormitory) doms;

    function Campus() { }

    function ResidentExists(string _login) constant returns(bool res){
        res = residents[_login].added();
    }

    function RegisterResident(uint _gender, string _login) {
        residents[_login] = new Resident(_gender, _login);
    }

    function GetResident(string _login) constant returns(Resident) {
        return residents[_login];
    }

    function AddDormitory(uint num) onlyOwner {
        doms[num] = new Dormitory(num);
    }

    function AddRoom(uint numDom, uint numRoom, uint capacity) onlyOwner {
        doms[numDom].AddRoom(numRoom, capacity);
    }

    function GetRoom(uint numDom, uint numRoom) constant returns(Room) {
            return doms[numDom].GetRoom(numRoom);
    }

    function GetRoomInfo(uint numDom, uint numRoom) constant returns(uint capacity, uint occupancy, uint gender, bool isFound) {
        Room r = doms[numDom].GetRoom(numRoom);
        capacity = r.capacity();
        occupancy = r.occupancy();
        gender = uint(r.gender());
        isFound = r.added();
    }
}