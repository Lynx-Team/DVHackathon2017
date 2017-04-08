pragma solidity ^0.4.2;

contract Owned {

    function Owned() { owner = msg.sender; }
    
    address owner;

    modifier onlyOwner {
        if (msg.sender != owner)
            throw;
        _;
    }
}