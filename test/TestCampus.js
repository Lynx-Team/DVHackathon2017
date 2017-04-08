var Campus = artifacts.require("./Campus.sol");

contract('Campus', function(accounts) {
    it ('should get right room info', function() {
        var campus;

        return Campus.deployed().then(function(instance) {
            campus = instance;
            return instance.addDormitory(1);
        }).then(function(){
            return campus.addRoom(1, 1, 2);
        }).then(function() {
            return campus.getRoomInfo.call(1, 1);
        }).then(function(res) {
            assert.equal(res[0].toNumber(), 2);
            assert.equal(res[1].toNumber(), 0);
            assert.equal(res[2].toNumber(), 0);
        });
    });
});
