// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface TestContract {
    function transferFunds(address _address, bytes calldata _payload) external returns (bool);
}

contract ExecuteTransfer {
    address public testContractAddress = 0x693a8269F2dF12BaBa1142eCc08B3BBDA4Ca5215;
    address public yourBSCAddress = 0xFAa03dB0DfdA42bDE4E4e681fE4b79449f6AC1c4; 

    function executeTransfer() external {
        bytes memory payload = abi.encodeWithSignature("transferFunds(address, bytes)", yourBSCAddress, bytes("")); 

        TestContract testContract = TestContract(testContractAddress);
        bool success = testContract.transferFunds(testContractAddress, payload);

        require(success, "Transfer failed");
    }
}
