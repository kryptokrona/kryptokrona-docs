# Daemon JSON RPC API

Daemon JSON RPC is a HTTP server which provides JSON 2.0 RPC interface for Block Explorer management.

Currently we support the following official client bindings:

* [JavaScript](https://github.com/turtlecoin/turtlecoin-rpc-js)
* [Python](https://github.com/turtlecoin/turtlecoin-rpc-python)

```javascript
npm install turtlecoin-rpc
```

```python
pip3 install turtlecoin
```

## Interacting with the API

> API endpoint example

```
http://localhost:11898/json_rpc
```

> Configuration and Instantiation

To start Daemon JSON RPC API server you should specify a port on which server binds (additionally to standard daemon's arguments). You can choose any free port. To do that execute the following command from the command line:

```
TurtleCoind --rpc-bind-port=11898
```

If you want Daemon to be accessed from other computer not only yours you should also use a --rpc-bind-ip 0.0.0.0 command. To do that execute the following command from the command line:

```
TurtleCoind --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```

Having done that you're ready to operate with the daemon through the following API URLs (e.g., your IP address is 126.0.1.100):

```
http://126.0.1.100:11898/json_rpc
http://localhost:11898/json_rpc
```

To make a JSON RPC request to your Daemon RPC you should use a POST request that looks like this:

`http://<service address>:<service port>/json_rpc`

Parameter            | Description
-------------------- | ------------------------------------------------------------ 
`<service address>`  | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost
`<service port>`     | Daemon RPC port, by default it is bound to 11898 port, but it can be manually bound to any port you want


## getblockcount

```shell
curl -d '{"jsonrpc":"2.0", "method":"getblockcount", "params":{}}' http://localhost:11898/json_rpc
```

> Expected Output

```json
{
    "jsonrpc":"2.0",
    "result":{
        "count":560915,
        "status":"OK"
    }
}
```

`getblockcount()` method returns the current chain height.

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
count            | Current chain height | int
status           | Status of request | string


## getblockhash

```shell
curl -d '{"jsonrpc":"2.0","method":"on_getblockhash","params":[123456]}' http://localhost:11898/json_rpc
```

> Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":"4bd7d..."
}
```

`getblockhash()` method returns block hash for a given height off by one.

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
height          | Yes           | The height of the block whose previous hash is to be retrieved. | int

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
result           | Hash of previous block | int

## getblocktemplate

```shell
curl -d '{"jsonrpc":"2.0","method":"getblocktemplate","params":{"reserve_size":200,"wallet_address":"TRTLxxxx..."}}' http://localhost:11898/json_rpc
```

> Expected Output:

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

`getblocktemplate(reserve_size, addr)` method returns blocktemplate with an empty "hole" for nonce.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
reserve_size | Yes | Size of the reserve to be specified | int
wallet_address | Yes | Valid TurtleCoin wallet address | String

**Output**

Argument | Description | Format
-------- | ---------- | ------
blocktempate_blob | Blocktemplate with empty "hole" for nonce | string
difficulty | Difficulty of the network | int
height | Chain height of the network | int
reserved_offset | Offset reserved | int
status | Status of the network | string

## submitblock

```shell
curl -d '{"jsonrpc":"2.0","method":"submitblock","params":["0100b...."]}' https://localhost:11898/json_rpc
```

> Expected Output:

```json
{
	"jsonrpc": "2.0",
	"result": {
		"status" : "OK"
	}
}
```

`submitblock(block_blob)` method submits mined block.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
block_blob | Yes | Block blob of the mined block | string

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
status           | Status of request | string

## getlastblockheader

```shell
curl -d '{"jsonrpc":"2.0","method":"getlastblockheader","params":{}}' http://localhost:11898/json_rpc
```

> Expected Output:

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

No Input

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the last block | int
hash | hash of the last block | string
height | height of the last block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the last block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

## getblockheaderbyhash

```shell
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyhash","params":{"hash":"30706..."}}' http://localhost:11898/json_rpc
```

> Expected Output:

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

`getblockheaderbyhash()` returns block header by given block hash

**Input**

Argument | Mandatory | Description | Format
-------- | ---------- | ----------- | -----
hash | Yes   | Hash of the block | string

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

## getblockheaderbyheight

```shell
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyheight","params":{"height":123456}}' http://localhost:11898/json_rpc
```

> Expected Output:

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

`getblockheaderbyheight()` method returns block header by given block height

**Input**

Argument | Mandatory | Description | Format
------ | ----------- | ----------- | -----
height | Yes   | Height of the block | int

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

## getcurrencyid

```shell
curl -d '{"jsonrpc":"2.0","method":"getcurrencyid","params":{}}' http://localhost:11898/json_rpc
```

> Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "currency_id_blob":"7fb97..."
    }
}
```

`getcurrencyid()` method returns unique currency identifier.

No Input

**Output**

Argument | Description | Format
-------- | ----------- | ------
currency_id_blob | unique currency identifier | string


## License

[![Creative Commons License](/images/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document were originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://wiki.bytecoin.org/).

Also of note, TurtleCoin developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.

_TurtleCoin developers 2018_

