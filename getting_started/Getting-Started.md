# Getting Started

## Download

Binary distributions can be found at https://github.com/turtlecoin/turtlecoin/releases/latest.

Select the appropriate file for the target platform (Windows, Mac, Linux)

## Installing

### Installing on Windows

Download the binary zip and extract it, there's nothing else to install.

### Installing on Mac

### Installing on Linux

Download the binary tarball (make sure you get mac for mac and linux for linux) and extract it (`tar -xzvf turtlecoin...tar.gz`). `cd` into the newly-created directory (e.g. *turtlecoin-v0.3.2*).

To make the binaries available system-wide, you can copy them to `/usr/local/bin`.

## Synchronizing the Blockchain

Running `TurtleCoind` will start the *TurtleCoind* network daemon, which will connect to the network and begin downloading and verifying the TurtleCoin blockchain.  
Because the blockchain is constantly growing, the file size is always increasing, and *TurtleCoind* must verify each block (CPU intensive). To save time, consider downloading a cached 'bootstrap' of the blockchain (see [Bootstrapping the Blockchain](Bootstrapping-the-Blockchain) for more info.)

### Windows

Run the `TurtleCoind.exe` executable from the Windows binary zip.

### Mac

### Linux

```bash
./TurtleCoind
```

### Using Simplewallet

With TurtleCoind still running in the background or another terminal/shell/command prompt, open Simplewallet in a new shell:

#### Windows

Run the `simplewallet.exe` executable from the Windows binary zip.

### Mac

#### Linux

```bash
./simplewallet
```

### Generating a Wallet

In the running *simplewallet* client:  
Press `G` to generate new wallet.  
Enter a filename for the wallet (default is _wallet.bin_).  
Enter a passphrase for the wallet. *Warning:* There is no passphrase confirmation, so enter it carefully!

### Opening a Wallet

In the running *simplewallet* client:  
Press `O` to open an existing wallet file.  
Enter the filename given for the wallet when it was created.  
Enter the passphrase given for the wallet when it was created.

### Viewing Wallet Address

To view a wallet's public address, in the running _simplewallet_ client, after opening a wallet, type `address` and press `enter`.

### Exporting Keys

Each TurtleCoin  wallet is, essentially, just a pair of keys (*View Key* and *Spend Key*) from which the public address is derived.  
It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access). In the event of a lost or corrupted wallet file, computer crash, etc., the *View Key* and *Spend Key* are the only way to restore a wallet and recover the funds it holds.  
Remember that **anyone with access to the View Key and Spend Keys will be able to access this wallet and take the funds it holds! Anyone with these keys will also be able to view all prior transactions from this wallet. Keep them secure!**

In the running *simplewallet* client, after opening a wallet, type `export_keys` and press `enter`.  
The *View Key* and *Spend Key* will appear. Copy them and store them **safely and securely**.

### Viewing Wallet Balance

In the running _simplewallet_ client, after opening a wallet, type `balance` and press enter to see the wallet's balance.

### Sending TurtleCoin Transactions

In the running _simplewallet_ client, after opening a wallet, type:

```
transfer <mixin> <destination_address> <amount>
```

Example:

```
transfer 8 TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6 100000000
```

Mixin is how many times a transaction is "mixed" with others for obfuscation and privacy. Most people suggest a mixin of 5 or more. Larger mixin's will take longer to be confirmed unless a higher fee is used. A mixin of 0 can be used to have a non private transaction.

#### Payment ID

Because transactions on the TurtleCoin blockchain are privatized, in some situations a payment ID is necessary for the recipient to be able to determine where the payment came from, for instance when depositing to an exchange or other service.  
To send a transaction with a payment ID, use the `-p` flag:

```
Transfer 8 TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6 100000000 -p abcdefghijklmnop
```

Note that, typically, the service/recipient will generate and provide the required payment ID.

### Saving the Wallet

'Live' wallets loaded into the *simplewallet* client must be synced with the blockchain in order to properly calculate balance, view transaction history, etc. It is important to properly save the wallet data before exiting *simplewallet* so that the synchronized data is not lost.

To save a wallet's data, in the running *simplewallet* client, with an open wallet, type `save` and press `enter`
