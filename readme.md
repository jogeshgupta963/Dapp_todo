# Setup of BlockChain

## Stack:

<ul>
<li>Solidity</li>
<li>truffle</li>
</ul>

## Setting Truffle

<ul>
<li>npm i -g truffle@5.0.2</li>
<li>truffle init</li>
<li>edit truffle config.js on ganache networks</li>
<li>create a deploy migration</li>
</ul>

## Deploying Smart Contract on Blockchain

<ul>
<li>truffle compile</li>
<li>truffle migrate --reset</li>
<li>truffle console</li>
<li>varName = await contractName.deployed()</li>
<li>use varName to call functions of ur smart contract</li>

</ul>

## Web3 Commands (Interact with Blockchain)

<ul>
<li>
const Web3 = require('web3')</li>

<li>const web3 = new Web3(new Web3.providers.HttpProvider(rtc_network));</li>

<li>balanceInWei = await web3.eth.getBalance(account_address)</li>
<li>weiToEther = web3.utils.fromWei(balanceInWei,'ether') </li>
<li>transaction = await web3.eth.sendTransaction({
    from:senders_address,
    to:reciever_address,
    value:web3.utils.toWei(amountInEther,"ether")})
}) </li>

</ul>
