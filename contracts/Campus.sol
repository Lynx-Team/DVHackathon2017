pragma solidity ^0.4.2;

contract Campus {
    address _owner;
    
    Dormitory[] doms;
    
    modifier onlyowner() {
        if (msg.sender == _owner) _;
    }
    
    function Campus() {
        _owner = msg.sender;
    }
    
    function AddDormitory(Dormitory d) onlyowner {
        doms.length += 1;
        doms[doms.length - 1] = d;
    }
}

contract Dormitory {
    
    Room[] rooms;
    
    address _owner;
    uint _id;
    
    modifier onlyowner() {
        if (msg.sender == _owner) _;
    }
    
    function Dormitory(uint id) {
        _owner = msg.sender;
        _id = id;
    }
    
    function AddRoom(Room r) onlyowner {
        rooms.length += 1;
        rooms[rooms.length - 1] = r;
    }
}

contract Sex {
    enum  State { Neutral, Male, Female }
}

contract Resident {
    
    address _owner;
    bool _allowed;
    
    Sex.State public _sex;
    
    modifier onlyowner() {
        if (msg.sender == _owner) _;
    }
    
    function Resident(bool allowed, string sex) {
        _allowed = allowed;
        bytes memory b = bytes(sex);
        if (b[0] == "M")
            _sex = Sex.State.Male;
        else
            _sex = Sex.State.Female;
        _owner = msg.sender;
    }
    
    function Sex() external returns(Sex.State) {
        return _sex;
    }
    
    function Reserve(Room room) onlyowner {
        room.Reserve(this);
    } 
}

contract Room {
    
    address _owner;
    uint _size;
    uint _num;
    Sex.State public _sex;
    
    Resident[] residents;
    
    modifier onlyowner() {
        if (msg.sender == _owner) _;
    }
    
    function Room(uint size, uint num) {
        _size = size;
        _num = num;
        residents.length = size;
        _sex = Sex.State.Neutral;
        _owner = msg.sender;
    }
    
    function Reserve(Resident r) {
        if (r.Sex() != _sex) throw;
    }
    
}