import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";


const TokenModule = buildModule("MyToken", (m) => {
  const initialSupply = ethers.parseEther('10000');
  const token = m.contract("MyToken", [initialSupply]);

  return { token };
});

export default TokenModule;
