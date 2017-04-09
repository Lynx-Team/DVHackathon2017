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
        num = _num;
        gender = Gender.g.Neutral;
        capacity = _capacity;
        occupancy = 0;
        dormNum = _dormNum;
        added = true;
    }

    function AddResident(Resident r) {
        if (occupancy == capacity || (gender != r.gender() && gender != Gender.g.Neutral))
            throw;

        occupancy = occupancy + 1;
        gender = r.gender();
        r.SetRoom(num);
        r.SetDorm(dormNum);
        rs.length = occupancy;
        rs[occupancy - 1] = r;
    }

    function SetDorm(uint _num) {
        dormNum = _num;
    }
}
