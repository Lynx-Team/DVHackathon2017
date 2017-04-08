pragma solidity ^0.4.2;

import "./Gender.sol";

contract Resident {
    
    address wallet;
    Gender.g public gender;
    uint public roomNum;
    string public login;
    bool public added;
    
    function Resident(uint _gender, string _login) {
        gender = Gender.g(_gender);
        wallet = msg.sender;
        roomNum = 0;
        login = _login;
        added = true;
    }
    
    function SetRoomNum(uint num) {
        roomNum = num;
    }
    
}