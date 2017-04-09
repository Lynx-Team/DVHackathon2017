pragma solidity ^0.4.2;

import "./Owned.sol";
import "./Resident.sol";
import "./Gender.sol";

contract Room is Owned {

    uint public num;
    uint public capacity;
    uint public occupancy;
    uint public dormNum;
    bool public added;
    Resident[] public rs;
    Gender.g public gender;

    function Room(uint _num, uint _capacity, uint _dormNum) {
        gender = Gender.g.Neutral;
        capacity = _capacity;
        dormNum = _dormNum;
        added = true;
    }

    function AddResident(Resident r) returns (bool) {
        if (occupancy == capacity || (gender != r.gender() && gender != Gender.g.Neutral))
            return false;
        occupancy++;
        r.SetRoom(num);
        r.SetDorm(dormNum);
        gender = r.gender();
        rs[occupancy - 1] = r;
        return true;
    }

    function SetDorm(uint _num) {
        dormNum = _num;
    }
}