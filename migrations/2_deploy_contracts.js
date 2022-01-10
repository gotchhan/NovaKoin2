const ConvertLib = artifacts.require("ConvertLib");
const NovaKoin = artifacts.require("NovaKoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, NovaKoin);
  deployer.deploy(NovaKoin);
};
