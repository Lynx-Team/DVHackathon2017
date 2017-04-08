pragma solidity ^0.4.2;

import "./Gender.sol";

contract Resident {
    
    address wallet;
    Gender.g public gender;
    uint roomNum;
    
    function Resident(uint _gender) {
        gender = Gender.g(_gender);
        wallet = msg.sender;
        roomNum = 0;
    }
    
    function SetRoomNum(uint num) {
        roomNum = num;
    }
    
}