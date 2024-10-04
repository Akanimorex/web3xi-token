// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Web3CXI is ERC20("AKAN Token", "AKN") {
    address public owner;

    constructor() {
        owner = msg.sender;
        _mint(msg.sender, 100000e18);
    }

    function mint(uint _amount) external {
        require(msg.sender == owner, "you are not owner");
        _mint(msg.sender, _amount * 1e18);
    }
}

//0xd9145CCE52D386f254917e481eB44e9943F39138
//0xdd8b463cdc12388c8a93b3dd9ea70e9d121347210ca1f691f5a32e3b24f7a703
