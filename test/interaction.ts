import { ethers } from "hardhat";

//0x14dC79964da2C08b23698B3D3cc7Ca32193d9955   normal address to test for nonValid Signer (acc7)

//multisigFactory ca - 0x5FbDB2315678afecb367f032d93F642f64180aa3
//token address ca  - 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

async function main() {
    const [owner,add1, add2,add3,add4,add5,add6,add7] = await ethers.getSigners();
    const validSigners = [
        owner,
        add1.address,
        add2.address,
        add3.address,
        add4.address
    ]
    const quorum = 4

    const rexCA = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const multisigCA = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



    const REXToken  = await ethers.getContractAt("REX",rexCA);
    const multisigFactory = await ethers.getContractAt("MultisigFactory",multisigCA);


    //create a multisig wallet
    const createWallet = await multisigFactory.createMultisigWallet(quorum,validSigners);


    const  wallet = await createWallet.wait();
    console.log("Multisig wallet clone:", wallet);

    const walletClones = await multisigFactory.getMultiSigClones();

    console.log("Wallet clones :::::",walletClones);


    //interact with a wallet
    const wallet1 = walletClones[1];
    const multisigWallet1 = await  ethers.getContractAt("Multisig",wallet1);

    //transfer some erc20 tokens to the wallet

    const amountToTransfer = ethers.parseUnits("10","18");

   const transfer = await REXToken.transfer(multisigWallet1,amountToTransfer);
   transfer.wait()






}



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});