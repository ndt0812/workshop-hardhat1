require("dotenv").config();

const Web3 = require("web3");
const floppyAbi = ["Copy your abi on bscan"];
const floppyAddress = "address you contract with";
myPrivateKey = process.env.PRIVATE_KEY;
myAdress = "your address";
receiverAddress = "address you want to transfer token";

async function interat() {
  web3 = await new Web3('https://data-seed-prebsc-2-s1.binance.org:8545');
  floppyContract = await new web3.eth.Contract(floppyAbi,floppyAddress);

  //call function from contract 
  //1.call
  // myBalance = await floppyContract.methods.balanceOf(myAdress).call();
  // console.log(myBalance);
  //2.send
  //send tranfer token
  await web3.eth.accounts.wallet.add(myPrivateKey);
  receiverBalanceBefore = await floppyContract.methods.balanceOf(receiverAddress).call();
  rs = await floppyContract.methods.transfer(receiverAddress, 100000).send({
    from: myAdress,
    gas: 3000000
  });

  receiverBalanceAfter = await floppyContract.methods.balanceOf(receiverAddress).call();
  console.log(rs,receiverBalanceBefore,receiverBalanceAfter);
}
interat();