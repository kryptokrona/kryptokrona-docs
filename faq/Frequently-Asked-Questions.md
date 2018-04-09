# Frequently Asked Questions

## Mining and xmr-stak

### General mining questions

#### Q: How do I get started mining?

 A: You can check [this guide](https://github.com/turtlecoin/turtlecoin/wiki/mining)

#### Q: I'm using a Mac, can I still mine?

 A: Yes, of course! We're working on a guide.
    
#### Q: I've started mining, how can I view my stats?

A: Visit your pool's homepage. There should be a spot for you to put in your TRTL address, and you can then view your hashrate, pending balance, payouts, and more.

#### Q: Why is the hashrate on the pool website different to what is shown in my miner?

A: The values will always be slightly different as it is an estimate, but if there is a large difference, it is likely you have just started mining. Your hashrate is calculated over time, and so it will slowly go up to the correct level.

#### Q: I've been mining for a while, but my pending balance hasn't gone up?

A: On your pool website, check the time that the last block was found on your pool, and the average time to find a block. Your stats will only update when your pool finds a block and it matures, so if your pool doesn't find blocks very often, you will have slower updating stats.

#### Q: I've been mining, but the balance in my wallet hasn't gone up?

A: To save money on fees, the pools send payouts in chunks. [Check your pool website for your pending balance](https://github.com/turtlecoin/turtlecoin/wiki/Frequently-Asked-Questions#i've-been-mining-for-a-while--but-my-pending-balance-hasn't-gone-up)

#### Q: I got banned from my mining pool. Why?

A: If you submit lots of invalid shares, a pool might ban you. Possible reasons for invalid shares can be your hardware getting overworked, high ping to the pool, or your difficulty being set too low. Try lowering any overclocks, choosing a pool closer to you or setting a higher difficulty port. You should get unbanned after approximately 20 minutes. This is a good time to setup some backup pools!

#### Q: Should I set up multiple pools?

A: Yes, in case you get banned, or a pool goes down for some time, you can keep mining. A good amount to have would be at least three.

#### Q: Where can I find a list of pools?

A: [Here](https://turtle-coin.com/#pools) is a list. It also has other nifty stats like hashrate, and minimum payout.

#### Q: What does pool weight mean?

A: Pool weight determines what order pools are used in case another is unavailable. Higher weighted pools are used first. If all pools are the same weight, they will be used in the top to bottom order that they are listed in the `config.txt` file.

#### Q: What pool should I choose?

A: There are a few factors to consider when choosing a pool. 
  One is your ping, you can find this out by pinging the server in a command prompt by typing `ping address.com`, where `address.com` is the pool address. 
Another is the hashrate of the pool. If you go on the pool's website, you can see how often they find blocks. If the pool takes a long time to find a block, your stats will take a long time to update. 
  Finally, the minimum payouts can be significant if you're a small miner. This is the amount you need to mine before you get paid. Most pools will list this under the "Payments" tab.

#### Q: How many hashes per second is good for my hardware?

A: <http://monerobenchmarks.info/> is a good source for this. You can look up your [CPU](http://monerobenchmarks.info/searchCPU.php) and [GPU](http://monerobenchmarks.info/searchGPU.php
).

#### Q: I can't get the miner working, is there an easier way to mine?

A: You can try the web miner [here](http://turtleminer.com) You will get a lower hashrate than native mining, and it doesn't have GPU support, however it's very easy to setup. Thanks to @Mongboy for creating this.

#### Q: What is the miner executable / why isn't it working?

A: This is a solo miner, which is CPU only. This means to gain any TRTL, you have to find a block by yourself, which unless you have many powerful CPUs, is very unlikely. 
  We strongly recommend using a pool, and a miner such as xmr-stak or xmrig. 
  Nevertheless, if you want to try it out, open a command prompt in the same directory, and run `miner.exe --address TRTL...` replacing `TRTL...` with your full TRTL address. 
  You need to have `TurtleCoind.exe` open and synced to use this miner, unlike conventional miners, where the pool hosts the daemon.

#### Q: Is there a calculator to see how much TRTL I'll mine per day?

A: [This one](http://mglolenstine.xyz/TRTLcalc/) is nice - thanks to @LifE[MGlolenstine] for creating this.

### xmr-stak issues

#### Q: How do I view my hashrate in xmr-stak?

A: Press `h` in the xmr-stak window.

#### Q: My PC is laggy when I'm mining in xmr-stak. Can I fix this?

A: This could be caused by multiple issues:
  * If you're using a Nvidia card, open up `nvidia.txt`, in the same directory as `xmr-stak.exe`. Try setting `bfactor` to `8` and `bslee`p to `100`, and then reload your miner after saving the file. 
  If it's still laggy, try increasing both values slightly. This will cause you to get less hashes per second, but can let you use your PC more effectively. You can try tweaking the value to increase your hashrate. 
  Some people also achieve success by lowering the thread count.
  * If you're using an AMD card, lower the value of `intensity` in `amd.txt`.
  * If you're using just a CPU, you can delete the cores being used from `cpu.txt`.

#### Q: How can I use just my GPU/CPU to mine in xmr-stak?

A: If you're using xmr-stak, you can make a batch file to start the miner. You can then use the commands `--noCPU`, `--noNVIDIA`, and `--noAMD` as needed. For example, put the following in a .txt file, change the extension to .bat, and then double click the file: `xmr-stak.exe --noCPU`. This will run the miner without using the CPU.

#### Q: My xmr-stak is crashing on startup, with an error about cuda. What am I doing wrong?

A: If you are using a Nvidia card, try opening `nvidia.txt` in the same directory as `xmr-stak.exe`, and lowering the value of `threads` until it stops crashing.

#### Q: I get a socket error when connecting to a pool in xmr-stak. What am I doing wrong?

A: Generally, this is due to an incorrectly configured config. In the directory where `xmr-stak.exe` is, there should be a file called `config.txt`. Open this up, and check that it looks similar to this:

    ```
    {"pool_address" : "eu.turtlepool.space:3333",
     "wallet_address" : "TRTLv2Fyavy8CXG8BPEbNeCHFZ1fuDCYCZ3vW5H5LXN4K2M2MHUpTENip9bbavpHvvPwb4NDkBWrNgURAd5DB38FHXWZyoBh4wW",
     "pool_password" : "x",
     "use_nicehash" : false,
     "use_tls" : false,
     "tls_fingerprint" : "",
     "pool_weight" : 10 },
   
     ```

  Your wallet address is the address starting with `TRTL`, not your wallet filename. 
  This error can also occur if the pool is having issues - try another pool and see if the error continues. Some users have experienced issues with their firewall or antivirus as well however, so perhaps try disabling these if you are experiencing this issue.

#### Q: Can I lower the 2% fee taken by xmr-stak?

A: This is possible, however please note that these devs are independent from the TurtleCoin project and are doing some great work, so I would suggest leaving it as is. 
  If you do wish to change/remove the dev fee, you will have to compile xmr-stak yourself, they have instructions to do this on their [GitHub](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md).
  Once you have downloaded the code, you need to change the file `donate-level.hpp` in the xmr-stak/xmr-stak/ folder.

#### Q: I'm getting an error in xmr-stak: `MEMORY ALLOC FAILED: VirtualAlloc failed. Reboot might help`

A: This is nothing to worry about, and is because xmr-stak failed to set up largepages. This can slightly raise your hash rate, and xmr-stak attempts to set it up, but it needs a reboot to apply.

#### Q: I'm missing the file `vcruntime140.dll`. Where can I get this?

A: Try installing this: <https://www.microsoft.com/en-us/download/details.aspx?id=52685>

#### Q: When I run xmr-stak I get an error: "The application was unable to start correctly (0x000007b)"

A: Try installing this: <https://go.microsoft.com/fwlink/?LinkId=746572>

## TurtleCoind / simplewallet issues

#### Q: I'm getting an error "Wrong password" when opening my wallet, but I know the password is correct.

A: If you have opened your wallet with the GUI wallet, it is no longer able to be opened by simplewallet, as they use two different formats. 
  Open this wallet with the GUI, and export your keys. Then, open simplewallet and choose import, and give your wallet a new name, for example, `cli-wallet.bin`. 
  Keep this copy for use with simplewallet, and use the other copy for use with the GUI.

#### Q: I'm seeing an error in TurtleCoind `Proof of work too weak for block...` and the syncing stopped.

A: This occurs because of the blockchain forking, generally when one mining pool has a very large hashrate. T
  his can be fixed by re-syncing the correct blockchain from scratch. See the question below.
  
#### Q: How can I re-sync the blockchain?

A: Close any turtlecoin related software, then go to `%APPDATA%`, andd delete the `TurtleCoin` folder. 
  Reopen TurtleCoind/GUI and let it re-sync. 
  
Alternatively, see [How to Bootstrap the TurtleCoin Blockchain](https://github.com/turtlecoin/turtlecoin/wiki/Bootstrapping-the-Blockchain) for instructions on how to bootstrap for a quicker sync.
  
#### Q: When I open TurtleCoind on a Mac, I get an error `Illegal instruction: 4`. How can I fix it?

A: This is a known issue with older macs or un-updated macs. 
    Try entering this into a terminal - `curl -sL "https://raw.githubusercontent.com/turtlecoin/turtlecoin/master/multi_installer.sh" | bash` 
    This automated script should compile the software itself, and place the binaries in ./src once done. 
    See <https://github.com/turtlecoin/turtlecoin#ubuntu-1604-and-macos-1010> for more info. 
    If this fails, try instead following the instructions to compile manually - <https://github.com/turtlecoin/turtlecoin#apple>
    
#### Q: I've opened the wallet, and I'm getting lots of red messages with an error like this: `2018-Jan-25 20:31:24.088189 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:7, Can't connect to daemon`

A: You need to also open up `TurtleCoind.exe` and let it sync. TurtleCoind is your connection to the network, and needs to be open and synced whenever you want to use your wallet.
  
#### Q: I've opened the wallet, and I'm getting lots of red messages with an error like this, and I can't type: `2018-Jan-25 21:59:57.595104 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:3, Network error`

  A: Your daemon hasn't finished syncing yet. Keep `TurtleCoind.exe` open, and wait until you are 0 days behind the current block, and for the daemon to print out a green message saying `SYNCHRONISED OK`.
  
#### Q: I've opened the wallet, and I'm getting lots of red messages with an error like this: `2019-Jan-29 01:24:48.088688 ERROR [BlockchainSynchronizer] Failed to query blocks: NodeErrorCategory:5, Internal node error`

  A: Update to the [latest version](http://latest.turtlecoin.lol)!
  
#### Q: I think I should have more money in my balance than it is showing, what should I do?

  A: Update to the [latest version](http://latest.turtlecoin.lol)!
  
#### Q: I've tried resetting, but it isn't working. What should I do?

  A: In `simplewallet.exe`, type `export_keys`, and save the view and spend key somewhere safe in case something goes wrong, if you haven't already. 
  Then, close and reopen `TurtleCoind.exe` and `simplewallet.exe`. 
  Next, type `reset` in `simplewallet.exe` after reopening your wallet file.
  It should start resetting your wallet, but the progress might not be immediately obvious - wait a while, and it should start counting up the blocks and printing out your transactions as it gets to them.
  
#### Q: I made a paper wallet, how do I use it?

  A: Once you've opened `TurtleCoind.exe` and let it sync, open up `simplewallet.exe` and type `i` to import. 
  It will then ask you to choose a new wallet name, and a password. Once you have done that, it will prompt you for your two keys, the view key, and spend key. You should have got these when you made your paper wallet.
  
#### Q: How do I backup my wallet?

  A: If `TurtleCoind.exe` is open and synced, open `simplewallet.exe,` and type `export_keys`. 
  Save the view and spend key somewhere safe, and you can use them to reimport your wallet if you lose it.
  
#### Q: How do I send TRTL?

  A: In `simplewallet.exe`, enter `transfer 3 <address> <amount>`, replacing `<address>` with the TRTL address of the person you're sending to, and `<amount>` as the amount you want to send. 
  Currently, the fee to transfer is 0.1 TRTL, so you need to send a tiny bit less than your entire balance. It is recommended not to send more than 500k TRTL in a single transfer.
  
#### Q: How do I send money to exchanges / use payment ID?

  A: In `simplewallet.exe`, enter `transfer 3 <addresstheygaveyou> <amount> -p <IDTHEYGAVEYOU>`, replacing `<addresstheygaveyou>` with the deposit address provided by the exchange, `<amount>` as the amount you want to send, and `<IDTHEYGAVEYOU>` with the payment ID provided by the exchange. 
  Currently, the fee to transfer is 0.1 TRTL, so you need to send a tiny bit less than your entire balance. It is recommended not to send more than 500k TRTL in a single transfer.
  
#### Q: What is mixin?

  A: Mixin is how many times your transaction is "mixed" with others for obfuscation and privacy. Most people suggest a mixin of 3. Larger mixins will take longer to be confirmed unless a higher fee is used. A mixin of 0 can be used to have a public transaction.
 
#### Q: How can I view my balance?

  A: If `TurtleCoind.exe` is fully synced, in `simplewallet.exe`, simply type `balance`.
  
#### Q: I'm seeing an error like this in TurtleCoind.exe: `2018-Jan-25 23:18:34.620941 WARNING Transaction 862689940f8860b4410a4eef7be326b05aedc6b14a26e68e503769017ee80359 is not valid. Reason: Transaction uses spent key image`. Should I worry?

  A: No, this is due to large transactions getting resubmitted on the network, and will be hidden from users in a later release of the software.
  
#### Q: I'm seeing an error like this in TurtleCoind.exe: `2018-Jan-26 01:51:56.920444 INFO [45.50.5.81:24899 INC] Tx verification failed`. Should I worry?

  A: No, this is a variable that has not been assigned, and will be hidden from users in a later release of the software.

#### Q: How long does it take to sync TurtleCoind.exe?

  A: Currently it takes around a few hours. This number will increase as more people use TRTL and the blockchain gets larger. 
  
#### Q: Can I speed up the syncing of the blockchain?

  A: You can grab a recent copy of the blockchain and incrementally sync from there. See [How to Bootstrap the TurtleCoin Blockchain](https://github.com/turtlecoin/turtlecoin/wiki/Bootstrapping-the-Blockchain) for instructions.
  
#### Q: Can I skip the syncing?

  A: Yes, you can currently use a public node with simplewallet. The keys stay on your PC, so it's secure. Check [this guide](https://github.com/turtlecoin/turtlecoin/wiki/Using-Simplewallet-with-Remote-Nodes) for more information
  
#### Q: What does it mean if my balance is locked?

  A: This is a transfer which hasn't been confirmed by the network yet. It will move into your main balance shortly, generally after 3 minutes.
  
#### Q: In simplewallet.exe, I get an error `Error: failed to save new wallet: boost::filesystem::unique__path: Keyset as registered is invalid`. How can I fix it?

  A: This is caused by some broken Windows crypto keys. Navigate to `C:/Users/*Your Windows Username*/AppData/Roaming/Microsoft/Crypto/RSA/`. 
  There should be a folder in there, with a long name, like `S-1-5-21-1416222650-108526586-4052533318-1000`. 
  Go into this folder and delete the files in there. Then reboot.

## GUI Wallet(s)

#### Q: Are there any GUI wallets?

  A: Yes, there are currently 2 GUI wallets actively in development, along with some mobile wallets too. However, they may not be ready for full use yet, and may not work on your operating system. Please note, currently you cannot import via keys. This will be added in later updates-
  
  [Xamarin Wallet](https://github.com/turtlecoin/turtle-wallet-xamarin)
  [Nest Wallet](https://github.com/turtlecoin/turtle-wallet-go)
  
#### Q: I'm using the GUI xamarin wallet, and when I start it up I get an error: `Could not load file or assembly Newtonsoft.Json`

  A: You need to download the .zip file from the github, not just the .exe file - <https://github.com/turtlecoin/desktop-xamarin/releases>, you need all of these files for the GUI to work.
  
#### Q: I'm using the GUI Xamarin wallet, and it fails to connect to the daemon.

  A: There are multiple reasons this can occur. Try opening `walletd.log` and scrolling to the bottom to determine what is occurring.
  * A wrong password - check walletd.log to check if this is occurring. If you are sure your password is correct, this link could be helpful - <https://github.com/turtlecoin/desktop-xamarin/issues/20>
  * You have another walletd.exe or TurtleCoind.exe process running. Only one of these can be running at once, and the GUI launches its own. Check task manager and close down any of these processes and try again.
  * walletd is importing blocks from the DB, which takes a while and so the GUI thinks it has crashed. Solution here - <https://github.com/turtlecoin/desktop-xamarin/issues/17#issuecomment-366790435>
  * If all else fails, if you have your private keys then you can instead import your wallet into simplewallet. 
  * If that is not a desirable option, come and ask for help over at [the Discord](chat.turtlecoin.lol)

## Paper Wallet / Cold Storage?
#### Q: Wait, What's Cold Storage?

  A: The term Cold Storage refers to a wallet that has been created via an offline means. The preferred way to do this is via a computer than has never ever been connected to the internet, commonly referred to as an air gapped device. 
  Why is this a thing? If done properly it means it is near impossible for the keys to be secrectly intercepted since the data is never viewable by other compute devices. 
  You see above/elsewhere wallet files are being created via the wallet software, these files might be stored unencrypted, if unencypted then the keys can be read by malicious software and balance's of those wallets transferred. 
  Thus to protect against that scenario you could transfer any TRTL balance to one of these cold storage addresses. Please remember to keep secure/secret backups of your keys. If you lose the keys you lose any balance that was transferred to that wallet. 
  You can use the paper wallet files below, to generate a Cold Storage address & keys. 
    
    #### Q: Can I make a paper wallet?**

  A: Yes, you can view the guide [here](https://github.com/turtlecoin/turtlecoin/wiki/setting-up-a-new-wallet#paper-wallet)

#### Q: Can I view the balance of my wallet online?

  A: Due to TurtleCoin being a privacy coin, this is not possible. 
  It should be possible in the future to allow users to give away just their Private View Key to view transactions, but this hasn't been implemented by anyone so far, and would allow that website to see every transaction that you make.

## Other
#### Q: Why does TRTL have such a high amount of tokens/small amount of decimal places?

  A: Read the great post about the justification for it [here](https://medium.com/@turtlecoin/one-trillion-turtles-coin-supply-and-unit-economics-5bfbea0aa1f1)
  
#### Q: How can I get some TRTL?

  A: There are multiple ways to acquire TRTL, for example:
  
  * Mining - see <http://mining.turtlecoin.lol>
  * Buying - TRTL is currently available on these exchanges: [TradeOgre](https://tradeogre.com/exchange/BTC-TRTL) and [TradeSatoshi](https://tradesatoshi.com/Exchange/?market=TRTL_BTC)
  * Bounties - Bounties for developing TRTL software, spreading the word of TRTL, and many other things are often posted in the #bounties channel on discord. Check the pinned messages for current bounties.
  * Tips - People will sometimes tip each other for creating good TRTL memes in the #memes channel.
  * Raindance - see the #raindance channel in discord - and check out [How to Raindance](https://github.com/turtlecoin/turtlecoin/wiki/Participating-in-Raindance) to see how to use it.
  * Faucet - Head over to the [faucet](https://faucet.trtl.me/) and enter your TRTL address. 
  The amount you can receive is limited, to share the TRTL for all. Thanks to @madk for creating this.
  
#### Q: Are there any light wallets / mobile wallets

  A: None are ready for usage right now, but they are being worked on. Check the dev channels in discord to see how people are getting on, and feel free to join in if you're a programmer!
  
#### Q: What is the #raindance channel / how does it work?

  A: There is an in depth, graphical explanation [here](https://github.com/turtlecoin/turtlecoin/wiki/Participating-in-Raindance) 
  
#### Q: How do I register my wallet on Discord?

  A: You can check out this guide [here](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#registering-your-wallet). 
  
#### Q: Where is the blockchain stored?

  A: On Windows, it is in `AppData/roaming/turtlecoin`. On Mac and Linux, it is in `~/.turtlecoin`.
  
#### Q: Is there a blockchain explorer?

  A: Yes, there are two: <https://blocks.turtle.link/> and <https://turtle-coin.com/>
  
#### Q: I have a question which wasn't answered here, what should I do?

  A: Join the discord, and come to the #help channel, we'll try and fix any issues: <http://chat.turtlecoin.lol/>
