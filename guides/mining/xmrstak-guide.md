# XMR-Stak Guide for TurtleCoin

#### Downloading and Installing

##### Windows

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest) - This will auto-detect your hardware, and tune everything for you.

2. Make a folder called **TurtleCoin Miner** on your desktop and unzip the file you just downloaded for XMR-Stak in there.

3. Double-click on `xmr-stak.exe`.

4. Click yes when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

5. Check [XMR-Stak Setup and Configuration](https://github.com/turtlecoin/turtlecoin/wiki/Mining#xmr-stak-setup-and-configuration)

##### Mac

See https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md and https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_MacOS.md

#### XMR-Stak Setup and Configuration

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.

1. `Currency: 'monero' or 'aeon'?`  
Enter `monero`.

2. `Pool address:`  
Choose a pool from any of the [available pools](#mining-pools) that is **closest to you** and enter its URL (you will be able to add more later).

3. `Username (Wallet address or pool username):`  
Enter your public TRTL address.  
 * If you have not yet downloaded and ran the TurtleCoin core software to sync the blockchain and create a wallet, you can make a [paper wallet]( http://turtlecoin.lol/wallet) to start mining towards now, and import the wallet later.

4. `Password:`  
Enter `x`.

5. `Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  
In most cases, `N` is fine.

6. `Do you want to use nicehash on this pool? (y/n)`  
Enter `n`.

7. `Do you want to use multiple pools? (y/n)`  
Enter `y` if you would like to add more pools. Give them all a weight of 10 if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  
XMR-Stak will prioritize the first/highest weight pool, and fall back to the others if it cannot connect.

Done!! The miner will now start scanning your hardware and will begin mining. Cowabunga dude!  

XMR-Stak will save your configuration in `config.txt` in the same directory from which it was first run. Run XMR-Stak again from the same directory to reuse the configuration.
