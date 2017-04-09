pragma solidity ^0.4.2;

import "./Gender.sol";

contract Resident {
    
    address wallet;
    Gender.g public gender;
    uint public roomNum;
    uint public dormNum;
    string public login;
    bool public added;
    
    function Resident(uint _gender, string _login) {
        gender = Gender.g(_gender);
        wallet = msg.sender;
        roomNum = 0;
        login = _login;
        added = true;
    }
    
    function SetRoom(uint num) {
        roomNum = num;
    }
    
    function SetDorm(uint num) {
        dormNum = num;
    }
}