---
title: Daemon HTTP RPC API
---

# Daemon HTTP RPC API

The daemon HTTP RPC is a HTTP server which provides additional information regarding network and daemon connections.

### Installation

```
npm i kryptokrona-rpc
```

### Interacting with the API

#### API endpoint example

```
http://localhost:11898
```

#### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:11898`, run:

`kryptokrona --rpc-bind-port=11898`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`kryptokrona --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`kryptokrona --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`kryptokrona --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

This would make the RPC server accessible at

`http://<your ip address>:11898`

and, locally at

`http://localhost:11898`

To make a HTTP RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>`

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

### getheight

`getheight()` returns the height of the daemon and the network

No Input.

**Output**

| Argument        | Description            | Format |
| --------------- | ---------------------- | ------ |
| height          | Current daemon height  | int    |
| network\_height | Current Network height | int    |
| status          | Status of request      | string |

```shell
curl http://localhost:11898/getheight
```

```js
daemon.getHeight().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "height":614214,
    "network_height":614218,
    "status":"OK"
}
```

### getinfo

`getinfo()` returns information related to the network and daemon connection

No Input.

**Output**

| Argument                     | Description                                                                                                                                 | Format |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| alt\_blocks\_count           | the number of blocks on alternative (split) chains since the start of the daemon                                                            | int    |
| difficulty                   | difficulty of the top block                                                                                                                 | int    |
| grey\_peerlist\_size         | list of peers that were alive but not any more (offline)                                                                                    | int    |
| hashrate                     | estimated network hashrate for given block (top block if general chain info) = difficulty / 30s (block time target)                         | int    |
| height                       | daemon height. index of the last locally stored block. different from network\_height when syncing the network, or when just found a block. | int    |
| incoming\_connections\_count | Number of peers connected to and pulling from this daemon node.                                                                             | int    |
| last\_known\_block\_index    | ?                                                                                                                                           | int    |
| major\_version               | blockchain major version. such as hash algorithm change                                                                                     | int    |
| minor\_version               | blockchain minor version. for example, difficulty algo adjustment. rarely used.                                                             | int    |
| network\_height              | blockchain length reported by peers. the longest value given by any connected peer.                                                         | int    |
| outgoing\_connections\_count | number of outgoing connections from the daemon                                                                                              | int    |
| start\_time                  | the time when this daemon was started. epoch time in seconds                                                                                | int    |
| status                       | Status of request                                                                                                                           | string |
| supported\_height            | the height of the blockchain for supported fork. if forked after this block height, this version does not support it                        | int    |
| synced                       | sync status. does the height of this node match the height of the network?                                                                  | bool   |
| testnet                      | whether the daemon is on testnet or not                                                                                                     | bool   |
| tx\_count                    | Total number of non-coinbase transaction in the chain.                                                                                      | int    |
| tx\_pool\_size               | Number of transactions that have been broadcast but not included in a block.                                                                | int    |
| upgrade\_heights             | pre-determined fork heights. blockchain heights where it forked.                                                                            | array  |
| version                      | version of the daemon software                                                                                                              | string |
| white\_peerlist\_size        | list of online peers                                                                                                                        | int    |

```shell
curl http://localhost:11898/getinfo
```

```js
daemon.getInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "alt_blocks_count":1,
    "difficulty":250340644,
    "grey_peerlist_size":493,
    "hashrate":8344688,
    "height":614321,
    "incoming_connections_count":28,
    "last_known_block_index":614319,
    "major_version":4,
    "minor_version":0,
    "network_height":614321,
    "outgoing_connections_count":8,
    "start_time":1531403048,
    "status":"OK",
    "supported_height":620000,
    "synced":true,
    "testnet":false,
    "tx_count":720189,
    "tx_pool_size":0,
    "upgrade_heights":[
        187000,
        350000,
        440000,
        620000,
        .....
    ],
    "version":"0.6.3",
    "white_peerlist_size":43
}
```

### gettransactions

`gettransactions()` method returns list of missed transactions. "Missed transactions" are invalid transactions in the sense that they do not exist in the blockchain. Input should include the transaction hashes to check. Try figuring that out. This method is likely to go away in near future.

No Input

**Output**

| Argument     | Description                                | Format |
| ------------ | ------------------------------------------ | ------ |
| missed\_tx   | array of missed transactions               | array  |
| status       | Status of request                          | string |
| txs\_as\_hex | array of hex values of missed transactions | array  |

```shell
curl http://localhost:11898/gettransactions
```

```js
daemon.getTransactions({
  hashes: [
    '549828e75151982b0e51b27e8f53b26ebc174f0ef78063984c8952b13e2a3564',
    '549828e75151982b0e51b27e8f53b26ebc174f0ef78063984c8952b13e2a3563'
  ]
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "missed_tx":[],
    "status":"OK",
    "txs_as_hex":[]
}
```

### getpeers

`getpeers()` method returns the list of peers connected to the daemon

No Input.

**Output**

| Argument | Description                          | Format |
| -------- | ------------------------------------ | ------ |
| peers    | array of peers (peer\_ip:peer\_port) | array  |
| status   | Status of request                    | string |

```shell
curl http://localhost:11898/getpeers
```

```js
daemon.getPeers().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "peers":[
        "192.222.157.172:11897",
        "94.23.49.75:11897",
        "112.78.10.43:11897",
        .....
    ],
    "status":"OK"
}
```

### feeinfo

`feeinfo()` method returns information about the fee set for the remote node.

No Input.

**Output**

| Argument | Description                      | Format |
| -------- | -------------------------------- | ------ |
| address  | address to which the fee is paid | string |
| amount   | fee amount                       | int    |
| status   | Status of fees for the node      | string |

```shell
curl http://localhost:11898/feeinfo
```

```js
daemon.feeInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

**Expected Output**

```json
{
    "address":"",
    "amount":0,
    "status":"Node's fee address is not set"
}
```

### License

[![Creative Commons License](https://github.com/kryptokrona/kryptokrona-docs/blob/master/assets/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, kryptokrona developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.
