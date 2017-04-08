pragma solidity ^0.4.8;

contract Owned {
    address owner;

    function Owned() { owner = msg.sender; }

    modifier onlyOwner {
        if (msg.sender != owner)
            throw;
        _;
    }
}

contract Campus is Owned {

    struct Dormitory {
        uint number;
        mapping (uint => Room) rooms;
    }

    struct Room {
        uint number;
        uint size;
        uint fullness;
        Sex sex;
    }

    struct Resident {
        bool alowed;
        Sex sex;
    }

    enum Sex { Neutral, Male, Female }

    mapping (uint => Dormitory) dormitories;

    function addDormitory(uint _number) onlyOwner {
        dormitories[_number] = Dormitory({number: _number});
    }

    function addRoom(uint dorNum, uint roomNum, uint _size) onlyOwner {
        dormitories[dorNum].rooms[roomNum] = Room({
            number: roomNum, size: _size,
            fullness: 0, sex: Sex.Neutral
        });
    }

    function getRoomInfo(uint dorNum, uint roomNum) returns (uint size, uint fullness, Sex sex) {
        Room room = dormitories[dorNum].rooms[roomNum];

        size = room.size;
        fullness = room.fullness;
        sex = room.sex;
    }
}
