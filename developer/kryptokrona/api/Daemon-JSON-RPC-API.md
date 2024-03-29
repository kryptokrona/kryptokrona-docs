---
title: Daemon JSON RPC API
---

# Daemon JSON RPC API

The daemon JSON RPC is a HTTP server which provides JSON 2.0 RPC interface for interacting with a daemon and a block explorer.

### Installation

```
npm i kryptokrona-rpc
```

### Interacting with the API

#### API endpoint example

```
http://localhost:11898/json_rpc
```

#### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:11898/json_rpc`, run:

`kryptokrona --rpc-bind-port=11898`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`kryptokrona --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`kryptokrona --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`kryptokrona --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

This would make the RPC server accessible at

`http://<your ip address>:11898/json_rpc`

and, locally at

`http://localhost:11898/json_rpc`

To make a JSON RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>/json_rpc`

| Parameter           | Description                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| `<service address>` | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost                  |
| `<service port>`    | Daemon RPC port, by default it is bound to 11898 port, but it can be manually bound to any port you want |

```js
const kryptokrona = require('kryptokrona-rpc').kryptokrona

const daemon = new kryptokrona({
  host: '0.0.0.0', // ip address or hostname of the kryptokrona host
  port: 11898, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false // whether we need to connect using SSL/TLS
})
```

### getblockcount

`getblockcount()` method returns the current chain height.

No Input.

**Output**

| Argument | Description          | Format |
| -------- | -------------------- | ------ |
| count    | Current chain height | int    |
| status   | Status of request    | string |

```
curl -d '{"jsonrpc":"2.0", "method":"getblockcount", "params":{}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlockCount().then((blockCount) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "count":560915,
        "status":"OK"
    }
}
```

### getblockhash

`getblockhash()` method returns block hash for a given height off by one.

**Input**

| Argument | Mandatory | Description                                                     | Format |
| -------- | --------- | --------------------------------------------------------------- | ------ |
| height   | Yes       | The height of the block whose previous hash is to be retrieved. | int    |

**Output**

| Argument | Description            | Format |
| -------- | ---------------------- | ------ |
| result   | Hash of previous block | int    |

```
curl -d '{"jsonrpc":"2.0","method":"on_getblockhash","params":[123456]}' http://localhost:11898/json_rpc
```

```js
daemon.getBlockHash({
  height: 500000
}).then((blockHash) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":"4bd7d..."
}
```

### getblocktemplate

`getblocktemplate(reserve_size, addr)` method returns blocktemplate with an empty "hole" for nonce.

**Input**

| Argument        | Mandatory | Description                         | Format |
| --------------- | --------- | ----------------------------------- | ------ |
| reserve\_size   | Yes       | Size of the reserve to be specified | int    |
| wallet\_address | Yes       | Valid kryptokrona wallet address    | String |

**Output**

| Argument           | Description                               | Format |
| ------------------ | ----------------------------------------- | ------ |
| blocktempate\_blob | Blocktemplate with empty "hole" for nonce | string |
| difficulty         | Difficulty of the network                 | int    |
| height             | Chain height of the network               | int    |
| reserved\_offset   | Offset reserved                           | int    |
| status             | Status of the network                     | string |

```
curl -d '{"jsonrpc":"2.0","method":"getblocktemplate","params":{"reserve_size":200,"wallet_address":"TRTLxxxx..."}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlockTemplate({
  reserveSize: 200,
  walletAddress: 'TRTLv1pacKFJk9QgSmzk2LJWn14JGmTKzReFLz1RgY3K9Ryn7783RDT2TretzfYdck5GMCGzXTuwKfePWQYViNs4avKpnUbrwfQ'
}).then((blockTemplate) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
	"jsonrpc": "2.0",
	"result": {
		"blocktemplate_blob": "0100de...",
		"difficulty": 65563,
		"height": 123456,
		"reserved_offset": 395,
		"status": "OK"
	}
}
```

### submitblock

`submitblock(block_blob)` method submits mined block.

**Input**

| Argument    | Mandatory | Description                   | Format |
| ----------- | --------- | ----------------------------- | ------ |
| block\_blob | Yes       | Block blob of the mined block | string |

**Output**

| Argument | Description       | Format |
| -------- | ----------------- | ------ |
| status   | Status of request | string |

```
curl -d '{"jsonrpc":"2.0","method":"submitblock","params":["0100b...."]}' https://localhost:11898/json_rpc
```

```js
daemon.submitBlock({
  blockBlob: '...'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
	"jsonrpc": "2.0",
	"result": {
		"status" : "OK"
	}
}
```

### getlastblockheader

`getlastblockheader` method returns the block header of the last block.

No Input

**Output**

| Argument       | Description                                                      | Format |
| -------------- | ---------------------------------------------------------------- | ------ |
| block\_size    | size of the block                                                | int    |
| depth          | height away from the known top block                             | int    |
| difficulty     | difficulty of the last block                                     | int    |
| hash           | hash of the last block                                           | string |
| height         | height of the last block                                         | int    |
| major\_version | -                                                                | int    |
| minor\_version | -                                                                | int    |
| nonce          | -                                                                | int    |
| num\_txs       | Number of transactions in the block                              | int    |
| orphan\_status | whether the last block was an orphan or not                      | bool   |
| prev\_hash     | hash of the previous block                                       | string |
| reward         | reward of the block                                              | str    |
| timestamp      | the time at which the block is occured on chain since Unix epoch | int    |
| status         | status of the request                                            | string |

```
curl -d '{"jsonrpc":"2.0","method":"getlastblockheader","params":{}}' http://localhost:11898/json_rpc
```

```js
daemon.getLastBlockHeader().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":86171,
            "depth":0,
            "difficulty":431119113,
            "hash":"b746b...",
            "height":561342,
            "major_version":4,
            "minor_version":0,
            "nonce":715846563,
            "num_txes":4,
            "orphan_status":false,
            "prev_hash":"b8e02...",
            "reward":2930801,
            "timestamp":1529750993
        },
        "status":"OK"
    }
}
```

### getblockheaderbyhash

`getblockheaderbyhash()` returns block header by given block hash

**Input**

| Argument | Mandatory | Description       | Format |
| -------- | --------- | ----------------- | ------ |
| hash     | Yes       | Hash of the block | string |

**Output**

| Argument       | Description                                                      | Format |
| -------------- | ---------------------------------------------------------------- | ------ |
| block\_size    | size of the block                                                | int    |
| depth          | height away from the known top block                             | int    |
| difficulty     | difficulty of the requested block                                | int    |
| hash           | hash of the requested block                                      | string |
| height         | height of the requested block                                    | int    |
| major\_version | -                                                                | int    |
| minor\_version | -                                                                | int    |
| nonce          | -                                                                | int    |
| num\_txs       | Number of transactions in the block                              | int    |
| orphan\_status | whether the requested block was an orphan or not                 | bool   |
| prev\_hash     | hash of the previous block                                       | string |
| reward         | reward of the block                                              | str    |
| timestamp      | the time at which the block is occured on chain since Unix epoch | int    |
| status         | status of the request                                            | string |

```
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyhash","params":{"hash":"30706..."}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlockHeaderByHash({
  hash: '7d6db7b77232d41c19d898e81c85ecf08c4e8dfa3434f975a319f6261a695739'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":11640,
            "depth":437898,
            "difficulty":70050782,
            "hash":"30706...",
            "height":123456,
            "major_version":3,
            "minor_version":0,
            "nonce":3177228614,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"4bd7d...",
            "reward":2969487,
            "timestamp":1516631879
        },
    "status":"OK"
    }
}
```

### getblockheaderbyheight

`getblockheaderbyheight()` method returns block header by given block height

**Input**

| Argument | Mandatory | Description         | Format |
| -------- | --------- | ------------------- | ------ |
| height   | Yes       | Height of the block | int    |

**Output**

| Argument       | Description                                                      | Format |
| -------------- | ---------------------------------------------------------------- | ------ |
| block\_size    | size of the block                                                | int    |
| depth          | height away from the known top block                             | int    |
| difficulty     | difficulty of the requested block                                | int    |
| hash           | hash of the requested block                                      | string |
| height         | height of the requested block                                    | int    |
| major\_version | -                                                                | int    |
| minor\_version | -                                                                | int    |
| nonce          | -                                                                | int    |
| num\_txs       | Number of transactions in the block                              | int    |
| orphan\_status | whether the requested block was an orphan or not                 | bool   |
| prev\_hash     | hash of the previous block                                       | string |
| reward         | reward of the block                                              | str    |
| timestamp      | the time at which the block is occured on chain since Unix epoch | int    |
| status         | status of the request                                            | string |

```
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyheight","params":{"height":123456}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlockHeaderByHeight({
  height: 502345
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":11640,
            "depth":437898,
            "difficulty":70050782,
            "hash":"30706...",
            "height":123456,
            "major_version":3,
            "minor_version":0,
            "nonce":3177228614,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"4bd7d...",
            "reward":2969487,
            "timestamp":1516631879
        },
    "status":"OK"
    }
}
```

### getcurrencyid

`getcurrencyid()` method returns unique currency identifier.

No Input

**Output**

| Argument           | Description                | Format |
| ------------------ | -------------------------- | ------ |
| currency\_id\_blob | unique currency identifier | string |

```
curl -d '{"jsonrpc":"2.0","method":"getcurrencyid","params":{}}' http://localhost:11898/json_rpc
```

```js
daemon.getCurrencyId().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "currency_id_blob":"7fb97..."
    }
}
```

### getblocks

`getblocks()` method returns information on the last 30 blocks from height (inclusive)

**Input**

| Argument | Mandatory | Description                                            | Format |
| -------- | --------- | ------------------------------------------------------ | ------ |
| height   | Yes       | height of the last block to be included in the result. | int    |

**Output**

| Argument |              | Description           | Format |
| -------- | ------------ | --------------------- | ------ |
| status   |              | status of the request | string |
| blocks   | **Array of** |                       |        |

```
     | cumul_size   | size of the block                     | int
     | difficulty   | difficulty of the block               | int
     | hash         | hash of the block                     | string
     | height       | height of the block                   | int
     | timestamp    | the time at which the block is occured on the chain since Unix epoch | int
     | tx_count     | number of transactions in the block   | int
```

```
curl -d '{"jsonrpc":"2.0","method":"f_blocks_list_json","params":{"height":500000}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlocks({
  height: 500000
}).then((blocks) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc": "2.0",
    "result": {
        "blocks":[
            {
                "cumul_size": 22041,
                "difficulty": 285124963,
                "hash": "62f00...",
                "height": 500000,
                "timestamp": 1527834137,
                "tx_count": 4
            }
        ],
        "status": "OK"
    }
}
```

### getblock

`getblock()` method returns information on a single block

**Input**

| Argument | Mandatory | Description       | Format |
| -------- | --------- | ----------------- | ------ |
| hash     | Yes       | hash of the block | string |

**Output**

| Argument                     | Description                                                         | Format |
| ---------------------------- | ------------------------------------------------------------------- | ------ |
| alreadyGeneratedCoins        | total number of coins generated in the network upto that block      | string |
| alreadyGeneratedTransactions | total number of transactions present in the network upto that block | int    |
| baseReward                   | calculated reward                                                   | int    |
| block\_size                  | size of the block                                                   | int    |
| depth                        | height away from the known top block                                | int    |
| difficulty                   | difficulty of the requested block                                   | int    |
| effectiveSizeMedian          | fixed constant for max size of block                                | int    |
| hash                         | hash of the requested block                                         | string |
| height                       | height of the requested block                                       | int    |
| major\_version               | -                                                                   | int    |
| minor\_version               | -                                                                   | int    |
| nonce                        | -                                                                   | int    |
| orphan\_status               | whether the requested block was an orphan or not                    | bool   |
| penalty                      | penalty in block reward determined for deviation                    | float  |
| prev\_hash                   | hash of the previous block                                          | string |
| reward                       | total reward of the block after removing penalty                    | str    |
| sizeMedian                   | calculated median size from last 100 blocks                         | int    |
| timestamp                    | the time at which the block is occured on chain since Unix epoch    | int    |
| totalFeeAmount               | total fees for the transactions in the block                        | int    |
| transactions                 | Array of transactions in the block                                  | array  |
| transactionsCumulativeSize   | total sum of size of all transactions in the block                  | int    |
| status                       | status of the request                                               | string |

Transaction Attributes:

| Argument    | Description                      | Format |
| ----------- | -------------------------------- | ------ |
| amount\_out | output amount of the transaction | int    |
| fee         | fees for the transaction         | int    |
| hash        | hash of the transaction          | string |
| size        | size of the transaction          | int    |

```
curl -d '{"jsonrpc":"2.0","method":"f_block_json","params":{"hash":"980ff..."}}' http://localhost:11898/json_rpc
```

```js
daemon.getBlock({
  hash: 'f11580d74134ac34673c74f8da458080aacbe1eccea05b197e9d10bde05139f5'
}).then((block) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "alreadyGeneratedCoins":"1659188157030",
            "alreadyGeneratedTransactions":1097221,
            "baseReward":2930784,
            "blockSize":384,
            "depth":1,
            "difficulty":264289473,
            "effectiveSizeMedian":100000,
            "hash":"980ff...",
            "height":561537,
            "major_version":4,
            "minor_version":0,
            "nonce":60779,
            "orphan_status":false,
            "penalty":0.0,
            "prev_hash":"c37f8...",
            "reward":2930784,
            "sizeMedian":265,
            "timestamp":1529757254,
            "totalFeeAmount":0,
            "transactions":[
                {
                    "amount_out":2930784,
                    "fee":0,
                    "hash":"c0a2d...",
                    "size":265
                }
            ],
            "transactionsCumulativeSize":265
        },
        "status":"OK"
    }
}
```

### gettransaction

`gettransaction()` method returns information on single transaction.

**Input**

| Argument | Mandatory | Description             | Format |
| -------- | --------- | ----------------------- | ------ |
| hash     | Yes       | hash of the transaction | string |

**Output**

| Argument  | Description                                          | Format      |
| --------- | ---------------------------------------------------- | ----------- |
| block     | details of the block in which transaction is present | json object |
| status    | status of the request                                | string      |
| tx        | sub-transactions in the transaction                  | json object |
| txDetails | details of the transaction                           | json object |

Block attributes:

| Argument    | Description                                                      | Format |
| ----------- | ---------------------------------------------------------------- | ------ |
| cumul\_size | size of the block                                                | int    |
| difficulty  | difficulty of the block                                          | int    |
| hash        | hash of the block                                                | string |
| height      | height of the block                                              | int    |
| timestamp   | the time at which the block is occured on chain since Unix epoch | int    |
| tx\_count   | number of transactions in the block                              | int    |

Transaction Details attributes:

| Argument    | Description                             | Format |
| ----------- | --------------------------------------- | ------ |
| amount\_out | total amount present in the transaction | int    |
| fee         | total fees of the transaction           | int    |
| hash        | hash of the transaction                 | string |
| mixin       | mixin of the transaction                | int    |
| paymentId   | payment Id of the transaction           | string |
| size        | total size of the transaction           | int    |

Transaction attributes:

| Argument     | Description                                           | Format |
| ------------ | ----------------------------------------------------- | ------ |
| extra        | Transaction extra which can be any information in hex | string |
| unlock\_time | delay in unlocking the amount                         | int    |
| version      | -                                                     | int    |
| vin          | array of input transactions                           | array  |
| vout         | array of output transactions                          | array  |

```
curl -d '{"jsonrpc":"2.0","method":"f_transaction_json","params":{"hash":"702ad..."}}' http://localhost:11898/json_rpc
```

```js
daemon.getTransaction({
  hash: '702ad5bd04b9eff14b080d508f69a320da1909e989d6c163c18f80ae7a5ab832'
}).then((transaction) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "cumul_size":22041,
            "difficulty":106780143,
            "hash":"62f00...",
            "height":500000,
            "timestamp":1527834137,
            "tx_count":4
        },
        "status":"OK",
        "tx":{
            "extra":"019e4...",
            "unlock_time":500040,
            "version":1,
            "vin":[
                {
                    "type":"ff",
                    "value":{
                        "height":500000
                    }
                }
            ],
            "vout":[
                {
                    "amount":80,
                    "target":{
                        "data":{
                            "key":"5ce69..."
                        },
                        "type":"02"
                    }
                }
            ]
        },
        "txDetails":{
            "amount_out":2936280,
            "fee":0,
            "hash":"702ad...",
            "mixin":0,
            "paymentId":"",
            "size":266
        }
    }
}
```

### gettransactionpool

`gettransactionpool()` returns the list of transaction hashes present in mempool

No Input

**Output**

| Argument     | Description                      | Format |
| ------------ | -------------------------------- | ------ |
| status       | status of the request            | string |
| transactions | array of transactions in mempool | array  |

Transactions attributes:

| Argument    | Description                      | Format |
| ----------- | -------------------------------- | ------ |
| amount\_out | output amount of the transaction | int    |
| fee         | fees for the transaction         | int    |
| hash        | hash of the transaction          | string |
| size        | size of the transaction          | int    |

```
curl -d '{"jsonrpc":"2.0","method":"f_on_transactions_pool_json","params":{}}' http://localhost:11898/json_rpc
```

```js
daemon.getTransactionPool().then((transactions) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output:**

```json
{
    "jsonrpc":"2.0",
    "result":{
        "status":"OK",
        "transactions":[
            {
                "amount_out":8990,
                "fee":10,
                "hash":"a5e88...",
                "size":541
            }
        ]
    }
}
```

### License

[![Creative Commons License](broken-reference)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, kryptokrona developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.
