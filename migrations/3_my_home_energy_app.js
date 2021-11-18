const MyHomeEnergyApp = artifacts.require("MyHomeEnergyApp");

module.exports = function (deployer) {
  deployer.deploy(MyHomeEnergyApp, 0);
};
