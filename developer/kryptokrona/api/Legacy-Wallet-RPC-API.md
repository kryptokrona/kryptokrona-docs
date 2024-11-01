---
title: kryptokrona-service
---

# kryptokrona-service

The kryptokrona RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for kryptokrona payment operations and address management.

Currently we support the following official client bindings:

* [PHP](https://github.com/kryptokrona/kryptokrona-rpc-php)
* [Python](https://github.com/kryptokrona/kryptokrona-rpc-python)
* [Go](https://github.com/kryptokrona/kryptokrona-rpc-go)

### Note: Eventually, kryptokrona-service will be deprecated. It is suggested to use [wallet-api](https://kryptokrona.github.io/wallet-api-docs) for new applications.

### Installation

```
composer require kryptokrona/kryptokrona-rpc-php
```

```
pip3 install kryptokrona
```

```
go get github.com/kryptokrona/kryptokrona-rpc-go
```

### Interacting with the API

#### API endpoint example

```
http://localhost:8070/json_rpc
```

#### Configuration and instantiation

To make a JSON RPC request to your kryptokrona RPC Wallet you should use a GET request that looks like this:

`http://<service address>:<service port>/json_rpc`

| Parameter           | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `<service address>` | IP of kryptokrona RPC Wallet, if RPC Wallet is located on local machine it is either 127.0.0.1 or localhost         |
| `<service port>`    | kryptokrona RPC Wallet port, by default it is bound to 8070 port, but it can be manually bound to any port you want |

```
<?php
use kryptokrona\kryptokronaService;

$config = [
    'rpcHost'     => 'http://localhost',
    'rpcPort'     => 8070,
    'rpcPassword' => 'passw0rd',
];

$kryptokronaService = new kryptokronaService($config);
```

```
from kryptokrona import Walletd

rpc_host = 'localhost'
rpc_port = 8070
rpc_password = 'passw0rd'

walletd = Walletd(rpc_password, rpc_host, rpc_port)
```

```
import (
  "fmt"
  trpc "github.com/kryptokrona/kryptokrona-rpc-go"
)

rpcHost := "localhost"
rpcPort := 8070
rpcPassword := "passw0rd"

service := trpc.Walletd{
  URL: rpcHost,
  Port: rpcPort,
  RPCPassword: rpcPassword}
```

### reset

`reset()` method allows you to re-sync your wallet.

**Input**

| Argument   | Mandatory | Description                                                                                      | Format |
| ---------- | --------- | ------------------------------------------------------------------------------------------------ | ------ |
| scanHeight | No        | The height to begin scanning for transactions at. This can greatly speed up wallet syncing time. | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"reset","params":{"scanHeight":100000}}' http://localhost:8070/json_rpc
```

```
<?php
$scanHeight = 100000;
$response = $kryptokronaService->reset($scanHeight);
echo $response;
```

```
scan_height = 100000
response = walletd.reset(scan_height)
print(response)
```

```
scanHeight := 0 // starting height to scan
response, err := service.Reset(scanHeight)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

No output in case of success.

> Note: If the `viewSecretKey` argument is not provided, the `reset()` method resets the wallet and re-syncs it. If the `viewSecretKey` argument is provided, the `reset()` method substitutes the existing wallet with a new one with the specified key.

### save

`save()` method allows you to save your wallet by request.

No input. No output in case of success.

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"save","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->save();
echo $response;
```

```
response = walletd.save()
print(response)
```

```
response, err := service.Save()
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

### getViewKey

`getViewKey()` method returns your view key.

No input.

**Output**

| Argument      | Description      | Format |
| ------------- | ---------------- | ------ |
| viewSecretKey | Private view key | string |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getViewKey","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->getViewKey();
echo $response;
```

```
response = walletd.get_view_key()
print(response)
```

```
response, err := service.GetViewKey()
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "viewSecretKey":"xxxxx..."
  }
}
```

### getSpendKeys

`getSpendKeys()` method returns your spend keys.

**Input**

| Argument | Mandatory | Description                                 | Format |
| -------- | --------- | ------------------------------------------- | ------ |
| address  | Yes       | Valid address that exists in this container | string |

**Output**

| Argument       | Description       | Format |
| -------------- | ----------------- | ------ |
| spendSecretKey | Private spend key | string |
| spendPublicKey | Public spend key  | string |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getSpendKeys","params":{"address":"SEKRxxxx..."}}' http://localhost:8070/json_rpc
```

```
<?php
$address = 'SEKRxxxx...';
$response = $kryptokronaService->getSpendKeys($address);
echo $response;
```

```
address = 'SEKRxxxx...'
response = walletd.get_spend_keys(address)
print(response)
```

```
address := "SEKRxxxx..."
response, err := service.GetSpendKeys(address)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "spendSecretKey":"xxxxx...",
    "spendPublicKey":"xxxxx..."
  }
}
```

### getMnemonicSeed

`getMnemonicSeed()` method returns the mnemonic seed for the given _deterministic_ address. A mnemonic seed is a list of words which can be used to recover a wallet.

**Input**

| Argument | Mandatory | Description                                               | Format |
| -------- | --------- | --------------------------------------------------------- | ------ |
| address  | Yes       | Valid deterministic address that exists in this container | string |

**Output**

| Argument     | Description   | Format |
| ------------ | ------------- | ------ |
| mnemonicSeed | Mnemonic seed | string |

> **Note:** The first wallet address that is generated when the container is created is the deterministic address. Only one wallet from a multi-wallet container can be deterministic. If a non-deterministic address is given, the RPC response will be an error with the message: "Keys not deterministic."

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getMnemonicSeed","params":{"address":"SEKRxxxx..."}}' http://localhost:8070/json_rpc
```

```
<?php
$address = 'SEKRxxxx...';
$response = $kryptokronaService->getMnemonicSeed($address);
echo $response;
```

```
address = 'SEKRxxxx...'
response = walletd.get_mnemonic_seed(address)
print(response)
```

```
address := "SEKRxxxx..."
response, err := service.GetMnemonicSeed(address)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "mnemonicSeed":"turtles are cool..."
  }
}
```

### getStatus

`getStatus()` method returns information about the current RPC Wallet state: block count, known block count, last block hash and peer count.

No input.

**Output**

| Argument        | Description                                                                | Format |
| --------------- | -------------------------------------------------------------------------- | ------ |
| blockCount      | Node's known number of blocks                                              | int    |
| knownBlockCount | Maximum known number of blocks of all seeds that are connected to the node | int    |
| lastBlockHash   | Hash of the last known block                                               | string |
| peerCount       | Connected peers number                                                     | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getStatus","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->getStatus();
echo $response;
```

```
response = walletd.get_status()
print(response)
```

```
response, err := service.GetStatus()
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "blockCount":455956,
    "knownBlockCount":455955,
    "lastBlockHash":"8d6f8...",
    "peerCount":8
  }
}
```

### getAddresses

`getAddresses()` method returns an array of your RPC Wallet's addresses.

No input.

**Output**

| Argument  | Description                                       | Format |
| --------- | ------------------------------------------------- | ------ |
| addresses | Array of strings, where each string is an address | array  |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getAddresses","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->getAddresses();
echo $response;
```

```
response = walletd.get_addresses()
print(response)
```

```
response, err := service.GetAddresses()
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "addresses":[
      "SEKRxxxx...",
      "SEKRxxxx..."
    ]
  }
}
```

### createAddress

`createAddress()` method creates an additional address in your wallet.

**Input**

| Argument       | Mandatory | Description                                                                                                                                                                                | Format |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| spendSecretKey | No        | Private spend key. If `spendSecretKey` was specified, RPC Wallet creates spend address                                                                                                     | string |
| spendPublicKey | No        | Public spend key. If `spendPublicKey` was specified, RPC Wallet creates view address                                                                                                       | string |
| newAddress     | No        | Is this a new address being created? If so, blocks before the creation timestamp will not be scanned. Defaults to true if neither keys are given, as it is guaranteed to be a new address. | bool   |
| scanHeight     | No        | The height to begin scanning for transactions at. Only applies if a public/secret key is supplied. This can greatly speed up wallet syncing time.                                          | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"createAddress","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$spendSecretKey = null;
$spendPublicKey = null;
$response = $kryptokronaService->createAddress($spendSecretKey, $spendPublicKey);
echo $response;
```

```
spend_secret_key = ''
spend_public_key = ''
response = walletd.create_address(spend_secret_key, spend_public_key)
print(response)
```

```
spendSecretKey := ""
spendPublicKey := ""
scanHeight := 850000
newAddress := true
response, err := service.CreateAddress(spendSecretKey, spendPublicKey, scanHeight, newAddress)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "address":"SEKRxxxx..."
  }
}
```

### deleteAddress

`deleteAddress()` method deletes a specified address.

**Input**

| Argument | Mandatory | Description              | Format |
| -------- | --------- | ------------------------ | ------ |
| address  | Yes       | An address to be deleted | string |

**Output**

In case of success returns an empty JSON object.

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"deleteAddress","params":{"address":"SEKRxxxx..."}}' http://localhost:8070/json_rpc
```

```
<?php
$address = 'SEKRxxxx...';
$response = $kryptokronaService->deleteAddress($address);
echo $response;
```

```
address = 'SEKRxxxx...'
response = walletd.delete_address(address)

# If the delete was successful, response will be True
print(response)
```

```
address := "SEKRxxxx..."
response, err := service.DeleteAddress(address)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

### getBalance

`getBalance()` method returns a balance for a specified address.

**Input**

| Argument | Mandatory | Description                                 | Format |
| -------- | --------- | ------------------------------------------- | ------ |
| address  | No        | Valid address that exists in this container | string |

**Output**

| Argument         | Description                                          | Format |
| ---------------- | ---------------------------------------------------- | ------ |
| availableBalance | Available balance of the specified address in shells | int    |
| lockedAmount     | Locked amount of the specified address in shells     | int    |

> **Note:** If an address is not specified, `getBalance()` returns a cumulative balance of all RPC Wallet's addresses.

> **Note:** Balances are expressed in shells, so a balance of 10000 is equal to 100.00 SEKR

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getBalance","params":{"address":"SEKRxxxx..."}}' http://localhost:8070/json_rpc
```

```
<?php
$address = 'SEKRxxxx...';
$response = $kryptokronaService->getBalance($address);
echo $response;
```

```
address = 'SEKRxxxx...'
response = walletd.get_balance(address)
print(response)
```

```
address := "SEKRxxxx..."
response, err := service.GetBalance(address)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "availableBalance":10000,
    "lockedAmount":0
  }
}
```

### getBlockHashes

`getBlockHashes()` method returns an array of block hashes for a specified block range.

**Input**

| Argument        | Mandatory | Description                 | Format |
| --------------- | --------- | --------------------------- | ------ |
| firstBlockIndex | Yes       | Starting height             | int    |
| blockCount      | Yes       | Number of blocks to process | int    |

**Output**

| Argument    | Description                                          | Format |
| ----------- | ---------------------------------------------------- | ------ |
| blockHashes | Array of strings, where each element is a block hash | array  |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getBlockHashes","params":{"firstBlockIndex":0,"blockCount":3}}' http://localhost:8070/json_rpc
```

```
<?php
$firstBlockIndex = 0;
$blockCount = 3;
$response = $kryptokronaService->getBlockHashes($firstBlockIndex, $blockCount);
echo $response;
```

```
first_block_index = 0
block_count = 3
response = walletd.get_block_hashes(first_block_index, block_count)
print(response)
```

```
firstBlockIndex := 0
blockCount := 3
response, err := service.GetBlockHashes(firstBlockIndex, blockCount)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "blockHashes":[
      "7fb97...",
      "8c973...",
      "2ef06..."
    ]
  }
}
```

### getTransactionHashes

`getTransactionHashes()` method returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction.

**Input**

| Argument        | Mandatory                                                              | Description                                        | Format |
| --------------- | ---------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| addresses       | No                                                                     | Array of strings, where each string is an address  | array  |
| blockHash       | Only one of these parameters (blockHash or firstBlockIndex) is allowed | Hash of the starting block                         | string |
| firstBlockIndex | Only one of these parameters (blockHash or firstBlockIndex) is allowed | Starting height                                    | int    |
| blockCount      | Yes                                                                    | Number of blocks to return transaction hashes from | int    |
| paymentId       | No                                                                     | Valid payment ID (64char hex string)               | string |

* If `paymentId` parameter is set, `getTransactionHashes()` method returns transaction hashes of transactions that contain specified payment ID in the given block range.
* If `addresses` parameter is set, `getTransactionHashes()` method returns transaction hashes of transactions that contain transfer from at least one of specified addresses.
* If both above mentioned parameters are set, `getTransactionHashes()` method returns transaction hashes of transactions that contain both specified payment ID and transfer from at least one of specified addresses.

**Output**

| Argument | Description  |   |   |
| -------- | ------------ | - | - |
| items    | **Array of** |   |   |

```
	   | **Attribute**            	                         | **Description**                                              | **Format** |                                        
       | blockHash                                           | Hash of the block which contains transaction hashes          | string     |
       | transactionHashes                                   | Array of strings, where each string is a transaction hash    | array      |
```

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getTransactionHashes","params":{"firstBlockIndex":400000,"blockCount":100000}}' http://localhost:8070/json_rpc
```

```
<?php
$blockCount = 100000;
$firstBlockIndex = 400000;
$blockHash = null;
$addresses = null;
$paymentId = null;

$response = $kryptokronaService->getTransactionHashes(
    $blockCount, $firstBlockIndex, $blockHash, $addresses, $paymentId
);

echo $response;
```

```
block_count = 100000
block_hash = '6c285...'
addresses = []
payment_id = ''

response = walletd.get_transaction_hashes(addresses, block_hash, block_count, payment_id)
print(response)
```

```
addresses := []string{"SEKRxxxx..."}
blockHash := ""
firstBlockIndex := 0
blockCount := 3
paymentID := ""
response, err := service.GetTransactionHashes(addresses, blockHash, firstBlockIndex, blockCount, paymentID)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "items":[
      {
        "blockHash":"f0d8c...",
        "transactionHashes":["529ea..."]
      },
      {
        "blockHash":"4a1ae...",
        "transactionHashes":["2e709..."]
      }
    ]
  }
}
```

### getTransactions

`getTransactions()` method returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction.

**Input**

| Argument        | Mandatory                                                                   | Description                                        | Format |
| --------------- | --------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| addresses       | No                                                                          | Array of strings, where each string is an address  | array  |
| blockHash       | Only one of these parameters (`blockHash` or `firstBlockIndex`) is allowed. | Hash of the starting block                         | string |
| firstBlockIndex | Only one of these parameters (`blockHash` or `firstBlockIndex`) is allowed. | Starting height >0 (1,2,3...)                      | int    |
| blockCount      | Yes                                                                         | Number of blocks to return transaction hashes from | int    |
| paymentId       | No                                                                          | Valid payment ID (64char hex string)               | string |

* If `paymentId` parameter is set, `getTransactions()` method returns transactions that contain specified payment ID in the given block range.
* If `addresses` parameter is set, `getTransactions()` method returns transactions that contain transfer from at least one of specified addresses.
* If both above mentioned parameters are set, `getTransactions()` method returns transactions that contain both specified payment ID and transfer from at least one of specified addresses.

**Output**

| Argument |              | Description | Format |
| -------- | ------------ | ----------- | ------ |
| items    | **Array of** |             |        |

```
	   | block_hash                   | hash of the block which contains a transaction    | string
	   | transactions                 | see below                                         | array
```

Transaction attributes:

| Argument        | Description                                                                | Format  |
| --------------- | -------------------------------------------------------------------------- | ------- |
| transactionHash | Hash of the transaction                                                    | string  |
| blockIndex      | Number of the block that contains a transaction                            | int     |
| timestamp       | Timestamp of the transaction                                               | int     |
| isBase          | Shows if the transaction is a CoinBase transaction or not                  | boolean |
| unlockTime      | Height of the block when transaction is going to be available for spending | int     |
| amount          | Amount of the transaction                                                  | int     |
| fee             | Transaction fee                                                            | int     |
| extra           | Hash of the transaction                                                    | string  |
| paymentId       | Payment ID of the transaction (optional) (64char hex string)               | string  |
| transfers       | Array of address (string), amount (int)                                    | array   |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getTransactions","params":{"firstBlockIndex":400000,"blockCount":100000}}' http://localhost:8070/json_rpc
```

```
<?php
$blockCount = 100000;
$firstBlockIndex = 400000;
$blockHash = null;
$addresses = null;
$paymentId = null;

$response = $kryptokronaService->getTransactions(
    $blockCount, $firstBlockIndex, $blockHash, $addresses, $paymentId
);

echo $response;
```

```
block_count = 100000
block_hash = '6c285...'
addresses = []
payment_id = ''

response = walletd.get_transactions(addresses, block_hash, block_count, payment_id)
print(response)
```

```
addresses := []string{"SEKRxxxx..."}
blockHash := ""
firstBlockIndex := 0
blockCount := 3
paymentID := ""
response, err := service.GetTransactions(addresses, blockHash, firstBlockIndex, blockCount, paymentID)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "items":[
      {
        "blockHash":"f0d8c...",
        "transactions":[
          {
            "amount":10000,
            "blockIndex":456018,
            "extra":"01bd0...",
            "fee":10,
            "isBase":false,
            "paymentId":"b6fc6...",
            "state":0,
            "timestamp":1526458339,
            "transactionHash":"529ea...",
            "transfers":[
              {"address":"SEKRxxxx...","amount":10000,"type":0},
              {"address":"","amount":-100000,"type":0},
              {"address":"","amount":89990,"type":0}
            ],
            "unlockTime":0
          }
        ]
      },
      {
        "blockHash":"4a1ae...",
        "transactions":[
          {
            "amount":5000,
            "blockIndex":456076,
            "extra":"018c1...",
            "fee":10,
            "isBase":false,
            "paymentId":"55255...",
            "state":0,
            "timestamp":1526460243,
            "transactionHash":"2e709...",
            "transfers":[
              {"address":"SEKRxxxx...","amount":5000,"type":0},
              {"address":"","amount":-8000,"type":0},
              {"address":"","amount":2990,"type":0}
            ],
            "unlockTime":0
          }
        ]
      }
    ]
  }
}
```

### getUnconfirmedTransactionHashes

`getUnconfirmedTransactionHashes()` method returns information about the current unconfirmed transaction pool or for a specified addresses.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

**Input**

| Argument  | Mandatory | Description                                            | Format |
| --------- | --------- | ------------------------------------------------------ | ------ |
| addresses | No        | Array of strings, where each string is a valid address | array  |

> **Note:** If addresses parameter is set, transactions that contain transfer from at least one of specified addresses are returned.

**Output**

| Argument          | Description                                                                 | Format |
| ----------------- | --------------------------------------------------------------------------- | ------ |
| transactionHashes | Array of strings, where each string is a hash of an unconfirmed transaction | array  |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getUnconfirmedTransactionHashes","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$addresses = null;
$response = $kryptokronaService->getUnconfirmedTransactionHashes($addresses);
echo $response;
```

```
addresses = []
response = walletd.get_unconfirmed_transaction_hashes(addresses)
print(response)
```

```
addresses := []string{"SEKRxxxx..."}
response, err := service.GetUnconfirmedTransactionHashes(addresses)
if err != nil {
		fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHashes":[
      "55a23..."
    ]
  }
}
```

### getTransaction

`getTransaction()` method returns information about a particular transaction.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

**Input**

| Argument        | Mandatory | Description                       | Format |
| --------------- | --------- | --------------------------------- | ------ |
| transactionHash | Yes       | Hash of the requested transaction | string |

**Output**

| Argument    | Description |
| ----------- | ----------- |
| transaction | see below   |

Transaction attributes:

| Argument        | Description                                                                | Format  |
| --------------- | -------------------------------------------------------------------------- | ------- |
| transactionHash | Hash of the transaction                                                    | string  |
| blockIndex      | Number of the block that contains a transaction                            | int     |
| timestamp       | Timestamp of the transaction                                               | int     |
| isBase          | Shows if the transaction is a CoinBase transaction or not                  | boolean |
| unlockTime      | Height of the block when transaction is going to be available for spending | int     |
| amount          | Amount of the transaction                                                  | int     |
| fee             | Transaction fee                                                            | int     |
| extra           | Hash of the transaction                                                    | string  |
| paymentId       | Payment ID of the transaction (optional) (64char hex string)               | string  |
| transfers       | Array of addresses (string), amount (int)                                  | array   |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getTransaction","params":{"transactionHash":"55a23..."}}' http://localhost:8070/json_rpc
```

```
<?php
$transactionHash = '55a23...';
$response = $kryptokronaService->getTransaction($transactionHash);
echo $response;
```

```
transaction_hash = '55a23...'
response = walletd.get_transaction(transaction_hash)
print(response)
```

```
transactionHash := "55a23..."
response, err := service.GetTransaction(transactionHash)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transaction":{
      "amount":5000,
      "blockIndex":456635,
      "extra":"0134b...",
      "fee":10,
      "isBase":false,
      "paymentId":"ac9c5...",
      "state":0,
      "timestamp":1526477499,
      "transactionHash":"55a23...",
      "transfers":[
        {"address":"SEKRxxxx...","amount":5000,"type":0},
        {"address":"","amount":-10000,"type":0},
        {"address":"","amount":4990,"type":0}
      ],
      "unlockTime":0
    }
  }
}
```

### sendTransaction

`sendTransaction()` method allows you to send transaction(s) to one or several addresses. Also, it allows you to use a payment ID for a transaction to a single address.

**Input**

| Argument      | Mandatory | Description                                                                                                                                           | Format |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| addresses     | No        | Array of strings, where each string is an address to take the funds from                                                                              | array  |
| transfers     | Yes       | Array of objects, address: (string address), amount: (int amount)                                                                                     | array  |
| fee           | No        | Transaction fee. Should be given in atomic units. Leave blank to use the minimum fee possible.                                                        | int    |
| feePerByte    | No        | Fee to pay per byte of the transaction. Should be given in atomic units. If given, should be greater than 1.953125, the minimum network fee per byte. | float  |
| unlockTime    | No        | The block height at which the transaction will be unlocked for spending.                                                                              | int    |
| anonymity     | Yes       | Privacy (mixin) level from block 800,000 three (3)                                                                                                    | int    |
| extra         | No        | String of variable length. Can contain A-Z, 0-9 characters.                                                                                           | string |
| paymentId     | No        | Payment ID (64char hex string)                                                                                                                        | string |
| changeAddress | No        | Valid and existing address in this container.                                                                                                         | string |

* If container contains only 1 address, `changeAddress` field can be left empty and the change is going to be sent to this address.
* If addresses field contains only 1 address, `changeAddress` can be left empty and the change is going to be sent to this address.
* In the rest of the cases, `changeAddress` field is mandatory and must contain an address.

**Output**

| Argument        | Description                     | Format |
| --------------- | ------------------------------- | ------ |
| transactionHash | Hash of the sent transaction    | string |
| fee             | The fee of the send transaction | int    |

```
curl -X POST -i -H "Accept: application/json" -d '{"jsonrpc":"2.0","id":"0","password":"passw0rd","method":"sendTransaction","params":{"transfers":[{"amount":5000,"address":"SEKReTFHsz8G4...Y5owuFxLd"}],"fee":100,"anonymity":3,"unlockTime":0}}' http://localhost:8070/json_rpc
```

```
<?php
$anonymity = 3;
$fee = 243000;
$addresses = null;
$unlockTime = null;
$extra = null;
$paymentId = null;
$changeAddress = 'SEKRyyyy...';

$transfers = [
    ["address" => "SEKRxxxx...", "amount"  => 5000],
];

$response = $kryptokronaService->sendTransaction(
    $anonymity, $transfers, $fee, $addresses, $unlockTime, $extra, $paymentId, $changeAddress
);

echo $response;
```

```
anonymity = 3
fee = 243000
addresses = []
unlock_time = 0
extra = ''
payment_id = ''
change_address = 'SEKRyyyy...'

transfers = [
    {"address" : "SEKRxxxx...", "amount" : 5000},
]

response = walletd.send_transaction(
    transfers, anonymity, fee, addresses, change_address, extra, payment_id, unlock_time
)
print(response)
```

```
addresses := []string{"SEKRyyyy..."} // can be empty
unlockTime := 0
extra := ""
paymentID := ""
fee := 243000
changeAddress := "SEKRyyyy..."

transfers := []map[string]interface{}{
  {
    "address" : "SEKRxxxx...",
    "amount" : 5000,
  },
}

response, err := service.SendTransaction(addresses, transfers, fee, unlockTime, extra, paymentID, changeAddress)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHash":"ae57e...",
    "fee": 4500
  }
}
```

### createDelayedTransaction

`createDelayedTransaction()` method creates a delayed transaction. Such transactions are not sent into the network automatically and should be pushed using `sendDelayedTransaction` method.

**Input**

| Argument      | Mandatory | Description                                                                                                                                           | Format |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| addresses     | No        | Array of strings, where each string is an address                                                                                                     | array  |
| transfers     | Yes       | Array of address (string), amount (int)                                                                                                               | array  |
| fee           | No        | Transaction fee. Should be given in atomic units. Leave blank to use the minimum fee possible.                                                        | int    |
| feePerByte    | No        | Fee to pay per byte of the transaction. Should be given in atomic units. If given, should be greater than 1.953125, the minimum network fee per byte. | float  |
| unlockTime    | No        | Height of the block until which transaction is going to be locked for spending.                                                                       | int    |
| anonymity     | Yes       | Privacy (mixin) level from block 800,000 three (3)                                                                                                    | int    |
| extra         | No        | String of variable length. Can contain A-Z, 0-9 characters.                                                                                           | string |
| paymentId     | No        | Payment ID (64char hex string)                                                                                                                        | string |
| changeAddress | No        | Valid and existing in this container address.                                                                                                         | string |

* If container contains only 1 address, `changeAddress` field can be left empty and the change is going to be sent to this address
* If addresses field contains only 1 address, `changeAddress` can be left empty and the change is going to be sent to this address
* In the rest of the cases, `changeAddress` field is mandatory and must contain an address.
* Outputs that were used for this transactions will be locked until the transaction is sent or cancelled

**Output**

| Argument        | Description                     | Format |
| --------------- | ------------------------------- | ------ |
| transactionHash | Hash of the sent transaction    | string |
| fee             | The fee of the send transaction | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"createDelayedTransaction","params":{"transfers":[{"address":"SEKRxxxx...","amount":5000}],"anonymity":3,"changeAddress":"SEKRyyyy..."}}' http://localhost:8070/json_rpc
```

```
<?php
$anonymity = 3;
$fee = 243000;
$addresses = null;
$unlockTime = null;
$extra = null;
$paymentId = null;
$changeAddress = 'SEKRyyyy...';

$transfers = [
    ["address" => "SEKRxxxx...", "amount"  => 5000],
];

$response = $kryptokronaService->createDelayedTransaction(
    $anonymity, $transfers, $fee, $addresses, $unlockTime, $extra, $paymentId, $changeAddress
);

echo $response;
```

```
anonymity = 3
fee = 243000
addresses = []
unlock_time = 0
extra = ''
payment_id = ''
change_address = 'SEKRyyyy...'

transfers = [
    {"address" : "SEKRxxxx...", "amount" : 5000},
]

response = walletd.create_delayed_transaction(
    transfers, anonymity, fee, addresses, change_address, extra, payment_id, unlock_time
)
print(response)
```

```
addresses := []string{"SEKRyyyy..."} // can be empty
unlockTime := 0
extra := ""
paymentID := ""
fee := 243000
changeAddress := "SEKRyyyy..."

transfers := []map[string]interface{}{
  {
    "address" : "SEKRxxxx...",
    "amount" : 5000,
  },
}

response, err := service.CreateDelayedTransaction(addresses, transfers, fee, unlockTime, extra, paymentID, changeAddress)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHash":"ae57e...",
    "fee": 4500
  }
}
```

### getDelayedTransactionHashes

`getDelayedTransactionHashes()` method returns hashes of delayed transactions.

No input.

**Output**

| Argument          | Description                                               | Format |
| ----------------- | --------------------------------------------------------- | ------ |
| transactionHashes | Array of strings, where each string is a transaction hash | array  |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getDelayedTransactionHashes","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->getDelayedTransactionHashes();
echo $response;
```

```
response = walletd.get_delayed_transaction_hashes()
print(response)
```

```
response, err := service.GetDelayedTransactionHashes()
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHashes":["b3e374..."]
  }
}
```

### deleteDelayedTransaction

`deleteDelayedTransaction()` method deletes a specified delayed transaction.

**Input**

| Argument        | Mandatory | Description                         | Format |
| --------------- | --------- | ----------------------------------- | ------ |
| transactionHash | Yes       | Valid, existing delayed transaction | string |

**Output**

In case of success returns an empty JSON object.

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"deleteDelayedTransaction","params":{"transactionHash":"b3e37..."}}' http://localhost:8070/json_rpc
```

```
<?php
$transactionHash = 'b3e37...';
$response = $kryptokronaService->deleteDelayedTransaction($transactionHash);
echo $response;
```

```
transaction_hash = '50d83...'
response = walletd.delete_delayed_transaction(transaction_hash)

# If delete is successful, the response will be True
print(response)
```

```
transactionHash := "50d83..."
response, err := service.DeleteDelayedTransaction(transactionHash)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

### sendDelayedTransaction

`sendDelayedTransaction()` method sends a specified delayed transaction.

**Input**

| Argument        | Mandatory | Description                         | Format |
| --------------- | --------- | ----------------------------------- | ------ |
| transactionHash | Yes       | Valid, existing delayed transaction | string |

**Output**

In case of success returns an empty JSON object.

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"sendDelayedTransaction","params":{"transactionHash":"c37cd..."}}' http://localhost:8070/json_rpc
```

```
<?php
$transactionHash = 'c37cd...';
$response = $kryptokronaService->sendDelayedTransaction($transactionHash);

echo $response;
```

```
transaction_hash = '50d83...'
response = walletd.send_delayed_transaction(transaction_hash)

# If transaction is sent successful, the response will be True
print(response)
```

```
transactionHash := "50d83..."
response, err := service.SendDelayedTransaction(transactionHash)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

### sendFusionTransaction

`sendFusionTransaction()` method allows you to send a fusion transaction, by taking funds from selected addresses and transferring them to the destination address. If there aren't any outputs that can be optimized, `sendFusionTransaction()` will return an error. You can use `estimateFusion` to check the outputs, available for the optimization.

**Input**

| Argument           | Mandatory | Description                                                                                                                                           | Format |
| ------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| threshold          | Yes       | Value that determines which outputs will be optimized. Only the outputs, lesser than the threshold value, will be included into a fusion transaction. | int    |
| anonymity          | Yes       | Privacy (mixin) level from block 800,000 three (3)                                                                                                    | int    |
| addresses          | No        | Array of strings, where each string is an address to take the funds from.                                                                             | array  |
| destinationAddress | No        | An address that the optimized funds will be sent to. Valid and existing in this container address.                                                    | string |

* If container contains only 1 address, `destinationAddress` field can be left empty and the funds are going to be sent to this address.
* If addresses field contains only 1 address, `destinationAddress` can be left empty and the funds are going to be sent to this address.
* In the rest of the cases, `destinationAddress` field is mandatory and must contain an address.

**Output**

| Argument        | Description                  | Format |
| --------------- | ---------------------------- | ------ |
| transactionHash | Hash of the sent transaction | string |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"sendFusionTransaction","params":{"threshold":1000000,"anonymity":3,"addresses":["SEKRxxxx...","SEKRyyyy..."],"destinationAddress":"SEKRzzzz..."}}' http://localhost:8070/json_rpc
```

```
<?php
$threshold = 1000000;
$anonymity = 3;
$addresses = ['SEKRxxxx...', 'SEKRyyyy...'];
$destinationAddress = 'SEKRzzzz...';
$response = $kryptokronaService->sendFusionTransaction($threshold, $anonymity, $addresses, $destinationAddress);

echo $response;
```

```
threshold = 1000000
anonymity = 3
addresses = ['SEKRxxxx...', 'SEKRyyyy...']
destination_address = 'SEKRzzzz...'
response = walletd.send_fusion_transaction(threshold, anonymity, addresses, destination_address)

print(response)
```

```
threshold := 1000000
addresses := []string{"SEKRxxxx...", "SEKRyyyy..."}
destinationAddress := "SEKRzzzz..."
response, err := service.SendfusionTransaction(threshold, addresses, destinationAddress)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHash":"93faed..."
  }
}
```

### estimateFusion

`estimateFusion()` method counts the number of unspent outputs of the specified addresses and returns how many of those outputs can be optimized. This method is used to understand if a fusion transaction can be created. If `fusionReadyCount` returns a value = 0, then a fusion transaction cannot be created.

**Input**

| Argument  | Mandatory | Description                                                                                                                                           | Format |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| threshold | Yes       | Value that determines which outputs will be optimized. Only the outputs, lesser than the threshold value, will be included into a fusion transaction. | int    |
| addresses | No        | Array of strings, where each string is an address to take the funds from.                                                                             | string |

**Output**

| Argument         | Description                                                 | Format |
| ---------------- | ----------------------------------------------------------- | ------ |
| totalOutputCount | Total number of unspent outputs of the specified addresses. | int    |
| fusionReadyCount | Number of outputs that can be optimized.                    | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"estimateFusion","params":{"threshold":1000000,"addresses":["SEKRxxxx...","SEKRyyyy..."]}}' http://localhost:8070/json_rpc
```

```
<?php
$threshold = 1000000;
$addresses = ['SEKRxxxx...', 'SEKRyyyy...'];
$response = $kryptokronaService->estimateFusion($threshold, $addresses);

echo $response;
```

```
threshold = 1000000
addresses = ['SEKRxxxx...', 'SEKRyyyy...']
response = walletd.estimate_fusion(threshold, addresses)
print(response)
```

```
threshold := 1000000
addresses := []string{"SEKRxxxx...","SEKRyyyy..."}
response, err := service.EstimateFusion(threshold, addresses)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "fusionReadyCount":0,
    "totalOutputCount":8
  }
}
```

### createIntegratedAddress

`createIntegratedAddress()` method allows you to create a combined address, containing a standard address and a paymentId, to be used in sendTransaction() or for supplying to a user, instead of using an address and paymentId as separate parameters. This is helpful to ensure users cannot forget to supply a payment Id.

**Input**

| Argument  | Mandatory | Description                           | Format |
| --------- | --------- | ------------------------------------- | ------ |
| address   | Yes       | A valid address                       | string |
| paymentId | Yes       | A valid paymentId (64char hex string) | string |

**Output**

| Argument          | Description                    | Format |
| ----------------- | ------------------------------ | ------ |
| integratedAddress | The created integrated address | string |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"createIntegratedAddress","params":{"paymentId":"7FE73BD90EF05DEA0B5C15FC78696619C50DD5F2BA628F2FD16A2E3445B1922F", "address":"SEKRxxxx..."}}' http://localhost:8070/json_rpc
```

```
<?php
$address = 'SEKRxxxx...';
$paymentId = '7FE73BD90EF05DEA0B5C15FC78696619C50DD5F2BA628F2FD16A2E3445B1922F';
$response = $kryptokronaService->createIntegratedAddress($address, $paymentId);

echo $response;
```

```
address = 'SEKRxxxx...'
payment_id = '7FE73BD90EF05DEA0B5C15FC78696619C50DD5F2BA628F2FD16A2E3445B1922F'
response = walletd.create_integrated_address(address, payment_id)
print(response)
```

```
address := "SEKRxxxx..."
paymentID := "7FE73BD90EF05DEA0B5C15FC78696619C50DD5F2BA628F2FD16A2E3445B1922F"
response, err := service.CreateIntegratedAddress(address, paymentID)
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "integratedAddress": "SEKRxxx..."
  }
}
```

### getFeeInfo

`getFeeInfo()` method retrieves the fee and address (if any) that that kryptokronad walletd is connecting to is using. This fee will automatically be added to any transactions sent by sendTransaction() or sendDelayedTransaction(). Note it does not apply to sendFusionTransaction().

No input.

**Output**

| Argument | Description                                                                | Format |
| -------- | -------------------------------------------------------------------------- | ------ |
| address  | The address of the node owner                                              | string |
| amount   | The fee that will be sent to the node owners address with each transaction | int    |

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"passw0rd","method":"getFeeInfo","params":{}}' http://localhost:8070/json_rpc
```

```
<?php
$response = $kryptokronaService->getFeeInfo();

echo $response;
```

```
response = walletd.get_fee_info()
print(response)
```

```
response, err := service.GetFeeInfo()
if err != nil {
	fmt.Println(err)
} else {
  fmt.Println(response)
}
```

**Expected Output:**

```
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "address": "SEKRxxx...",
    "amount": 5000
  }
}
```

### validateAddress

`validateAddress()` method takes an address as it's only argument and returns isValid: true/false, depending on the validity of the address provided.

**Input**

| Argument | Description             | Format |
| -------- | ----------------------- | ------ |
| address  | The address to validate | string |

**Output**

| Argument | Description                                                  | Format  |
| -------- | ------------------------------------------------------------ | ------- |
| isValid  | The result, i.e. wheter the provided address is valid or not | boolean |

```
curl -X POST -i -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":"0","password":"passw0rd","method":"validateAddress","params":{"address":"SEKReYisjz5FqzU4bxS48aA5BTcercMddeqsYnoCU2WLNJeeRf1gVwqUHJx3paXBzuVGUJimRsMtKaNABCZLnSUBE2YpVKeyxuj"}}' http://localhost:8070/json_rpc
```

**Expected Output:**

```
{
  "id":"0",
  "jsonrpc":"2.0",
  "result": {
    "isValid":true
  }
}
```

### License

[![Creative Commons License](https://github.com/kryptokrona/kryptokrona-docs/raw/master/docs/assets/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, kryptokrona developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.
