---
description: This page will help you get started with starting a Hugin Node.
---

# How to run a Hugin Node

### What are Hugin Nodes?

Hugin Nodes are the cornerstone of the Hugin Messenger message distribution system. When two users who are online try to send a message to one another, the message will be sent through a P2P tunnel, powered by [HyperSwarm](https://github.com/holepunchto/hyperswarm).

However, when the recipient of a message is not online, the message is instead sent to the decentralized Hugin Node network. If the user has a registered a mobile device with the Hugin Master Nodes, the message will first be sent as a push notification to it's device. Additionally, the Hugin Nodes will store encrypted messages for 25h so they can be read once the user is back online. Messages sent to the nodes are always end-to-end encrypted.

To reward Hugin Node operators, each message sent from a client to the node network will also have a small proof-of-work segment appended to the message, that the receiving Hugin Node can send to the XKR mining network in order to garner a small XKR reward for each message relayed. This also provides the network with spam protection.

### How to install the Hugin Node software

1. Install nodejs [https://nodejs.org/en/download](https://nodejs.org/en/download) (version 20+).
2. Install the Hugin Node software by running the following command in your terminal:

```
npm i hugin-node -g
```

### How to start the Hugin Node

Simply run this command in your terminal to start the node:

```
hugin-node
```

On the first start, you will be prompted to input your XKR address where rewards should be sent. After you've done so, the node should be up and running!

You can also use the following command:

```
hugin-node --debug
```

This will print some useful debug logs so you can make sure the node is getting connection to other nodes as well as clients.\
\
Thanks for helping the Hugin Messenger network!
