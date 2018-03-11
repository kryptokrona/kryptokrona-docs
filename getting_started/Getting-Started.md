# Getting Started

## Downloading

Binary distributions can be found at https://github.com/turtlecoin/turtlecoin/releases/latest.

Select the appropriate file for the target platform (Windows, Mac, Linux). Windows binaries are provided in *.zip* format, while Mac and Linux are provided in *.tar.gz* format.

## Installing

### Installing on Windows

Extract the *.zip* file (`turtlecoin...-windows.zip`).

### Installing on Mac

Extract the *.tar.gz* file:

```bash
tar -xzf turtlecoin..-mac.tar.gz
```

### Installing on Linux

Extract the *.tar.gz* file: 

```bash
tar -xzf turtlecoin..-linux.tar.gz
```

## Synchronizing the Blockchain

Running `TurtleCoind` will start the *TurtleCoind* network daemon, which will connect to the network and begin downloading and verifying the TurtleCoin blockchain.  
Because the blockchain is constantly growing, the file size is always increasing, and *TurtleCoind* must verify each block (CPU intensive). To save time, consider downloading a cached 'bootstrap' of the blockchain (see [Bootstrapping the Blockchain](Bootstrapping-the-Blockchain) for more info.)

### Windows

Run the `TurtleCoind.exe` executable extracted from the Windows binary zip:

```powershell
PS C:\Downloads\turtlecoin-windows> TurtleCoind.exe
```

### Mac

Run the `TurtleCoind` binary extracted from the Mac binary tarball:

```bash
:~/Downloads/turtlecoin-mac$ ./TurtleCoind
```

### Linux

Run the `TurtleCoind` binary extracted from the Linux binary tarball:

```bash
:~/Downloads/turtlecoin-linux$ ./TurtleCoind
```

## Using Simplewallet

With `TurtleCoind` still running in the background or another terminal/shell/command prompt, open Simplewallet in a new shell:

#### Windows

Run the `simplewallet.exe` executable from the Windows binary zip.

#### Mac

```bash
./simplewallet
```

#### Linux

```bash
./simplewallet
```

### Creating a Wallet

In the running *simplewallet* client:  
Press `G` to generate new wallet.  
Enter a filename for the wallet (default is _wallet.bin_).  
Enter a passphrase for the wallet. *Warning:* There is no passphrase confirmation, so enter it carefully!

```
[O]pen existing wallet, [G]enerate new wallet file, [I]mport wallet or [E]xit.
G
Specify wallet file name (e.g., wallet.bin).
Wallet file name: mynewwallet
password: ************
Sync from timestamp: 1520712597

Welcome to your new wallet, here is your payment address:
TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB

Please copy your secret keys and store them in a secure location:
view key: really_long_random_view_key_do_not_share_this
spend key: really_long_random_spend_key_do_not_share_this

If you lose these your wallet cannot be recreated!
```

### Opening a Wallet

In the running *simplewallet* client:  
Press `O` to open an existing wallet file.  
Enter the filename given for the wallet when it was created.  
Enter the passphrase given for the wallet when it was created.

```
What do you want to do?
[O]pen existing wallet, [G]enerate new wallet file, [I]mport wallet or [E]xit.
O
Specify wallet file name (e.g., wallet.bin).
Wallet file name: mynewwallet
password: ************
2018-Mar-11 13:14:44.295114 INFO    Loading wallet...
Sync from timestamp: 1520712597
2018-Mar-11 13:14:44.376288 INFO    Opened wallet: TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB
2018-Mar-11 13:14:44.383305 INFO    **********************************************************************
Use "help" command to see the list of available commands.
**********************************************************************
```

### Viewing Wallet Address

To view a wallet's public address, in the running _simplewallet_ client, after opening a wallet, type `address` and press `enter`.

```
[wallet TRTLv2]: address
2018-Mar-11 13:16:14.995828 INFO    TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB
[wallet TRTLv2]:
```

### Exporting Keys

Each TurtleCoin  wallet is, essentially, just a pair of keys (*View Key* and *Spend Key*) from which the public address is derived.  
It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access). In the event of a lost or corrupted wallet file, computer crash, etc., the *View Key* and *Spend Key* are the only way to restore a wallet and recover the funds it holds.
Remember that **anyone with access to the View Key and Spend Keys will be able to access this wallet and take the funds it holds! Anyone with these keys will also be able to view all prior transactions from this wallet. Keep them secure!**

In the running *simplewallet* client, after opening a wallet, type `export_keys` and press `enter`.  
The *View Key* and *Spend Key* will appear. Copy them and store them **safely and securely**.

```
[wallet TRTLv2]: export_keys
Spend secret key: really_long_random_spend_key_do_not_share_this
View secret key: really_long_random_view_key_do_not_share_this
[wallet TRTLv2]:
```

### Viewing Wallet Balance

In the running _simplewallet_ client, after opening a wallet, type `balance` and press enter to see the wallet's balance.

```
[wallet TRTLv2]: balance
2018-Mar-11 13:23:47.265365 INFO    available balance: 1000.10, locked amount: 100.10
[wallet TRTLv2]:
```

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
transfer 8 TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6 100000000 -p abcdefghijklmnop
```

Note that, typically, the service/recipient will generate and provide the required payment ID.

### Saving the Wallet

'Live' wallets loaded into the *simplewallet* client must be synced with the blockchain in order to properly calculate balance, view transaction history, etc. It is important to properly save the wallet data before exiting *simplewallet* so that the synchronized data is not lost.

To save a wallet's data, in the running *simplewallet* client, with an open wallet, type `save` and press `enter`

```
[wallet TRTLv2]: save
2018-Mar-11 13:24:40.473511 INFO    Wallet data saved
[wallet TRTLv2]:
```

### Help

You can always type 'help' to see a list of commands and a short description of each command.

```
[wallet TRTLv2]: help
2018-Mar-11 13:26:00.953478 INFO    Commands:
  address              Show current wallet public address
  balance              Show current wallet balance
  bc_height            Show blockchain height
  exit                 Close wallet
  export_keys          Show the secret keys of the opened wallet
  help                 Show this help
  incoming_transfers   Show incoming transfers
  list_transfers       Show all known transfers
  payments             payments <payment_id_1> [<payment_id_2> ... <payment_id_N>] - Show payments <payment_id_1>, ... <payment_id_N>
  reset                Discard cache data and start synchronizing from the start
  save                 Save wallet synchronized data
  set_log              set_log <level> - Change current log level, <level> is a number 0-4
  transfer             transfer <mixin_count> <addr_1> <amount_1> [<addr_2> <amount_2> ... <addr_N> <amount_N>] [-p payment_id] [-f fee] - Transfer <amount_1>,... <amount_N> to <address_1>,... <address_N>, respectively. <mixin_count> is the number of transactions yours is indistinguishable from (from 0 to maximum available)

[wallet TRTLv2]:
```
