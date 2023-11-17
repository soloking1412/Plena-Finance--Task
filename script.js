const Web3 = require('web3');

const aaveAddress = '0x24A42fD5C58043C7E90e901f1d9b79c2aD07c9b1'; // Replace with contact
const erc20Address = '0x608c2038b0d0a09ee3156906c2dca22e8946097d'; // Replace with the token you need 
const amountToDeposit = 1000000000000000000; // 1 ETH

const web3 = new Web3(window.ethereum);

(async () => {
  // Check if Metamask is installed
  if (!window.ethereum) {
    alert('Please install Metamask to use this script.');
    return;
  }

  // Check if the user is connected to the Ethereum network
  if (!await web3.eth.net.isListening()) {
    alert('Please connect to the Ethereum network.');
    return;
  }

  // Get the user's account
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  // Get the Aave contract
  const aaveContract = new web3.eth.Contract(aaveContractAbi, aaveAddress);

  // Approve Aave to spend the ERC20 token
  const approveTx = await erc20Contract.methods.approve(aaveAddress, amountToDeposit).send({ from: account });

  // Wait for the approval transaction to be mined
  const approvalReceipt = await approveTx.once('receipt');

  // Deposit the ERC20 token into Aave
  const depositTx = await aaveContract.methods.deposit(erc20Address, amountToDeposit).send({ from: account });

  // Wait for the deposit transaction to be mined
  const depositReceipt = await depositTx.once('receipt');

  // Show the user a confirmation message
  alert('Successfully deposited ERC20 token into Aave!');
})();
