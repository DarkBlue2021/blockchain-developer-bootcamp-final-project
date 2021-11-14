const MyHomeEnergyManager = artifacts.require("MyHomeEnergyManager");

module.exports = function (deployer) {
  deployer.deploy(MyHomeEnergyManager, 0);
};
