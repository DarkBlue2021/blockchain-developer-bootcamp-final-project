const MyHomeEnergy = artifacts.require("MyHomeEnergy");

module.exports = function (deployer) {
  deployer.deploy(MyHomeEnergy, 0);
};
