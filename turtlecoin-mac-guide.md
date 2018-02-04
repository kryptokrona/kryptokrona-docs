# TurtleCoin Mac Guide

This guide is for Mac users who want to get started with the TurtleCoin
blockchain and wallet along with the xmr-stak miner. Suggestions for improving
this document are welcome and can be submitted in the "Issues" section of this
repo.

Show your support for this guide by sending some shells to:

```
TRTLuxbuW9uZfhAgmLpK8mfisSScfp325GiTHbD2he3eFHcrxbaHxaQRNJcnA42pbSejGaLEcCvGCeiHDr1Frz8YC71hbWUEVYa
```

## Getting Started

The first thing to do is install TurtleCoin on your Mac.

1. Go to the main TurtleCoin website at
[turtlecoin.lol](https://turtlecoin.lol) to download the latest Mac build.
These are CLI files used to sync to the TurtleCoin blockchain and create a
wallet.

2. Make a folder on your desktop called "TurtleCoin" and unzip the contents of
the downloaded zip file into this folder.

```bash
cd ~/Desktop
mkdir TurtleCoin
```

## Sync the Blockchain

Now that you have the latest CLI files in your TurtleCoin folder, the next
steps are to sync the blockchain to your computer.

1. Go to the TurleCoin folder and run the syncing program to start syncing
with the blockchain. Run the following commands in a terminal window:

```bash
cd ~/Desktop/TurtleCoin
./TurtleCoind
```

2. While the blockchain is downloading to your computer, various files will be
created in the `~/.TurtleCoin` folder. This folder is located in the user's
home directory, it is not the same folder you created earlier on the desktop.
Since the syncing process can take several hours, go ahead and exit the
program by entering the exit command in the terminal.

```bash
exit
```

3. To speed things up, you can download a recent copy of the blockchain by
following the instructions for Mac and Linux at [HowToBootstrapBlockchain](https://github.com/turtlecoin/docs/blob/master/HowToBootstrapBlockchain.md).

4. After you download the blockchain from Step 3, start the syncing process
again from within the `~/Desktop/TurtleCoin` folder.

```bash
cd ~/Desktop/TurtleCoin
./TurtleCoind
```

5. Wait until the sync is complete. The completion will be indicated in the
terminal window with green text saying `SYNCHRONIZED OK`.

## Wallet

Now that you have a current copy of the blockchain, it's time to create your
wallet in the `~/Desktop/TurtleCoin/` folder.

1. Open a new terminal window and enter the commands shown below. Note that
you should have two terminal windows open: one for connecting to the
blockchain and a second window for interfacing with the wallet.

```bash
cd ~/Desktop/TurtleCoin
./simplewallet 
```

2. Follow the instructions in the terminal to create a new wallet.

3. To test your wallet, go to [faucet.trtl.me](https://faucet.trtl.me) for
free TRTLs.

## Miner

To starting mining turtle coins on your Mac, the [xmr-stak](https://github.com/fireice-uk/xmr-stak) 
miner can be complied from source.

1. Go to the [xmr-stak/releases](https://github.com/fireice-uk/xmr-stak/releases) 
page and download the latest source code as a zip file.

2. Place the file on your desktop at `~/Desktop/xmr-stak-2.2.0/`

3. Follow the instructions in the [compile_MacOS](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md) 
document to build the xmr-stak miner for your Mac.

4. After the build is complete, go to the bin folder and run the miner.

```bash
cd ~/Desktop/xmr-stak-2.2.0/bin/
./xmr-stak
```

5. To connect the miner with a turtle mining pool, you can use the
configurations shown below.

```bash
- Currency:
monero
- Pool address:
ny.minetrtl.us:3333
- Username
your-public-wallet-address
- Password
x
```

Answer no as `n` to the remaining questions. If the miner was successfully
installed and configured, it will automatically begin mining turtle coins
using the pool address.

## Pool

Multiple pools are available for mining turtle coins. In the examples above,
the `ny.minetrtl.us:3333` is used. See the TurtleCoin documentation for a
listing of other pools.

To check your status and payment history as you are mining, go to the URL of
the mining pool. For example, if you mined from the `ny.minetrtl.us:3333`
pool, go to the `ny.minetrtl.us` website to view the status of the pool.

## Summary

Once you have everything setup, follow the steps below to use your wallet or
start mining turtle coins.

To sync the blockchain and open your wallet:

1. Go to the `~/Desktop/TurtleCoin/` folder in a new terminal window
2. Run `./TurtleCoind` to sync the blockchain
3. Keep the blockchain window open
4. In a second terminal window run `./simplewallet` to generate, open, or import a wallet

To mine turtle coins:

1. Go to the `~/Desktop/xmr-stak/bin` folder in a new terminal window
2. Run `./xmr-stak` to mine turle coins using your previous configuration

## Links

Here are some links for further information about the TurtleCoin platform.

TurtleCoin website https://turtlecoin.lol

Discord chat http://chat.turtlecoin.lol

TRTL subreddit https://www.reddit.com/r/TRTL/

XMR-Stak miner https://github.com/fireice-uk/xmr-stak

GitHub https://github.com/turtlecoin

Twitter https://twitter.com/_turtlecoin
