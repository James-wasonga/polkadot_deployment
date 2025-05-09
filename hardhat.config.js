/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-ignition-ethers');

require('dotenv').config();
module.exports = {
  solidity: "0.8.28",
  networks:{
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
