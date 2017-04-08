var Campus = artifacts.require("./Campus.sol");
var Dormitory = artifacts.require("./Dormitory.sol");
var Room = artifacts.require("./Room.sol");
var Resident = artifacts.require("./Resident.sol");
var Gender = artifacts.require("./Gender.sol");
var Owned = artifacts.require("./Owned.sol");

module.exports = function(deployer) {
    deployer.deploy(Campus);
    deployer.deploy(Dormitory);
    deployer.deploy(Room);
    deployer.deploy(Resident);
    deployer.deploy(Gender);
    deployer.deploy(Owned);

    deployer.link(Dormitory, Campus);

    deployer.link(Room, Dormitory);

    deployer.link(Owned, Room);
    deployer.link(Resident, Room);
    deployer.link(Gender, Room);

    deployer.link(Gender, Resident);
};
