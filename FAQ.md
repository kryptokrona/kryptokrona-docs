# Frequently Asked Questions

## Mining

* **Q: How do I get started mining?**

    A: http://mining.turtlecoin.lol/

* **Q: I'm using a Mac, can I still mine?**

    A: Yes, you can follow the guide for windows, but you'll need to compile xmr-stak yourself, and download the mac version of the wallet: http://latest.turtlecoin.lol https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_MacOS.md

* **Q: I've started mining, how can I view my stats?**

    A: Take the pool address, and remove the port number. For example, if your pool address is `slowandsteady.fun:3333`, go to the website `slowandsteady.fun`. There should be a spot for you to put in your TRTL address, and you can then view your hashrate, pending balance, payouts, and more.

* **Q: Why is the hashrate on the pool website different to in my miner?**

    A: The values will always be slightly different, but if there is a large difference, it is likely you have just started mining. Your hashrate is calculated over time, and so will slowly go up to the correct level.

* **Q: How do I view my hashrate?**

    A: If you are using xmr-stak, press `h`. Alternatively, if you are using a pool, you can check your pool stats, see the above question.

* **Q: I've been mining for a while, but my pending balance hasn't gone up?**

    A: On your pool website, check the time that the last block was found on your pool, and the average time to find a block. Your stats will only update when your pool finds a block, so if your pool doesn't find blocks very often, you will have slower updating stats. You will still earn the same amount of TRTL though!

* **Q: I've been mining, but the balance in my wallet hasn't gone up?**

    A: To save money on fees, the pools send payouts in chunks. Check your pool website for your pending balance - see "I've started mining, how can I view my stats"

* **Q: My PC is laggy when I'm mining. Can I fix this?**

    A:
  * If you're using a Nvidia card, open up nvidia.txt, in the same directory as the xmr-stak.exe. Try setting bfactor to 8 and bsleep to 100, and then reload your miner after saving the file. If it's still laggy, try increasing both values slightly. This will cause you to get less hashes per second, but can let you use your PC more effectively. You can try tweaking the value to increase your hashrate. Some people also achieve success by lowering the thread count.
  * If you're using an AMD card, there should be an intensity value you can lower in amd.txt.
  * If you're using just a CPU, you can delete the cores being used from cpu.txt.

* **Q: How can I use just my GPU/CPU to mine?**

    A: If you are using xmr-stak, you can make a batch file to start the miner. You can then use the commands `--noCPU`, `--noNVIDIA`, and `--noAMD` as needed. For example, put the following in a .txt file, change the extension to .bat, and then double click the file: `xmr-stak.exe --noCPU`. This will run the miner without using the CPU.

* **Q: My miner is crashing on startup. What am I doing wrong?**

    A: If you are using a nvidia card, try opening nvidia.txt in the same directory as the xmr-stak.exe, and lowering the value for threads until it stops crashing.

* **Q: I got banned from my mining pool. Why?**

    A: If you submit lots of invalid shares, a pool might ban you. Possible reasons for invalid shares can be your hardware getting overworked, high ping to the pool, or your difficulty being set too low. You should get unbanned after approximately 20 minutes. This is a good time to setup some backup pools!

* **Q: Should I set up multiple pools?**

    A: Yes, in case you get banned, or a pool goes down for sometime, you can keep mining. A good amount to have would be at least three.

* **Q: Where can I find a list of pools?**

    A: http://turtle-coin.com/#pools - This website also shows some other nice stats like hashrate, and min payout.

* **Q: I get a socket error when connecting to a pool. What am I doing wrong?**

    A: Generally, this is due to an incorrectly configured config. In the directory where your xmr-stak.exe is, there should be a file called `config.txt`. Open this up, and check that it looks similar to this:

    ```
    {"pool_address" : "eu.turtlepool.space:3333",
     "wallet_address" : "TRTLv2Fyavy8CXG8BPEbNeCHFZ1fuDCYCZ3vW5H5LXN4K2M2MHUpTENip9bbavpHvvPwb4NDkBWrNgURAd5DB38FHXWZyoBh4wW",
     "pool_password" : "x",
     "use_nicehash" : false,
     "use_tls" : false,
     "tls_fingerprint" : "",
     "pool_weight" : 10 },
    ```

    Your wallet address is the address starting with TRTL, not your wallet filename. Some users have experienced issues with their firewall or antivirus as well however, so perhaps try disabling these if you are experiencing this issue.

* **Q: What does pool weight mean?**

    A: Pool weight determines what order pools are used in case another is unavailable. A higher weight is a higher priority, so If you have three pools, with weight 3, 2, and 1, the pool with weight 3 will be used unless you disconnect from it, in which case you will go to the pool with weight 2, and then weight 1 if necessary.

* **Q: What pool should I chose?**

    A: There are a few factors to consider when choosing a pool. One is your ping, you can find this out by pinging the server in command prompt, by typing `ping address.com`. Another is the hashrate of the pool. If you go on the pools website, you can see how often they find blocks. If the pool takes a long time to find a block, your stats will take a long time to update. Finally, the minimum payouts can be significant if you're a small miner. This is the amount you need to mine before you get paid. Most pools will list this under the "payment" tab.

* **Q: How many hashes per second is good for my hardware?**

    A: http://monerobenchmarks.info/ is a good source for this. Look up your CPU and GPU with these links: http://monerobenchmarks.info/searchCPU.php http://monerobenchmarks.info/searchGPU.php

* **Q: I'm missing the file vcruntime140.dll. Where can I get this?**

    A: Try installing this: https://www.microsoft.com/en-us/download/details.aspx?id=52685

* **Q: I'm getting an error in xmr-stak: `MEMORY ALLOC FAILED: VirtualAlloc failed. Reboot might help`**

    A: This is nothing to worry about, and is because xmr-stak failed to set up largepages. This can slightly raise your hash rate, and xmr-stak attempts to set it up, but it needs a reboot to apply.

* **Q: Can I lower the 2% fee taken by xmr-stak?**

    A: This is possible, however please note that these devs are independent from the TurtleCoin project and are doing some great work, so I would suggest leaving it as is. If you do wish to change/remove the dev fee, you will have to compile xmr-stak yourself, they have instructions to do this on their site - https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md . Once you have downloaded the code, you need to change the file `donate-level.hpp` in the xmr-stak/xmr-stak/ folder.
    
* **Q: I can't get the miner working, is there an easier way to mine?**

    A: You can try the webminer here: http://turtleminer.com/ You will get a lower hashrate than native mining, and it doesn't have GPU support, however it's very easy to setup. Thanks to @Mongboy for creating this.
    
* **Q: What is the miner executable / why isn't it working?**

    A: This is a solo miner, which is CPU only. This means to gain any TRTL, you have to find a block by yourself, which unless you have many powerful CPU's, is very unlikely. We strongly recommend using a pool, and a miner such as xmr-stak or xmrig. Nethertheless, if you want to try it out, open a command prompt in the same directory, and run `miner.exe --address TRTL...` replacing `TRTL...` with your full TRTL address. You need to have TurtleCoind.exe open and synced to use this miner, unlike the conventional miners where the pool hosts the daemon.

## Wallet / TurtleCoind issues

* **Q: I've opened the wallet, and I'm getting lots of red messages with an error like this: `2018-Jan-25 20:31:24.088189 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:7, Can't connect to daemon`**

    A: You need to also open up TurtleCoind.exe and let it sync. TurtleCoind is your connection to the network, and needs to be open and synced whenever you want to use your wallet.

* **Q: I've opened the wallet, and I'm getting lots of red messages with an error like this, and I can't type: `2018-Jan-25 21:59:57.595104 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:3, Network error`**

    A: Your daemon hasn't finished syncing yet. Keep TurtleCoind.exe open, and wait until you are 0 days behind the current block, and it should print out a green message saying "SYNCHRONISED OK"

* **Q: I've opened the wallet, and I'm getting lots of red messages with an error like this: `2019-Jan-29 01:24:48.088688 ERROR [BlockchainSynchronizer] Failed to query blocks: NodeErrorCategory:5, Internal node error`**

    A: Exit simplewallet.exe and TurtleCoind.exe, then reopen TurtleCoind.exe and simplewallet and wait for sync to complete if needed, then type `reset` in simplewallet.exe. You might need to repeat this process a few times.

* **Q: I made a paper wallet, how do I use it?**

    A: Once you've opened TurtleCoind.exe and let it sync, open up simplewallet.exe and type `i` to import. It will then ask you to choose a new wallet name, and a password. Once you have done that, it will prompt you for your two keys, the view key, and spend key. You should have got these when you made your paper wallet.

* **Q: How do I backup my wallet?**

    A: If your TurtleCoind.exe is open and synced, open simplewallet.exe, and type `export_keys`. Save the view and spend key somewhere safe, and you can use them to reimport your wallet if you lose it.

* **Q: I think I should have more money in my balance than it is showing, what should I do?**

    A: In simplewallet.exe, type `export_keys`, and save the view and spend key somewhere safe in case something goes wrong, if you haven't already. Then, type `reset`, and close TurtleCoind.exe and simplewallet.exe, and reopen them both. You might need to repeat this process a few times.
    
* **Q: I've tried resetting, but it isn't working. What should I do?**

    A: In a command prompt, enter the following command: `simplewallet.exe --SYNC_FROM_ZERO --wallet-file your_wallet` replacing `your_wallet` with the name of your wallet file. This should be more effective at finding all the transactions. Thanks to @Ereptor for this fix.

* **Q: How do I send TRTL's?**

    A: In simplewallet.exe, enter `transfer 3 address amount`, where address is your address starting with TRTL, and amount is the amount you want to send. Currently, the fee to transfer is 0.1 TRTL's, so you need to send a tiny bit less than your entire balance. Currently it is recommended not to send much more than 500k TRTL's in one transfer.

* **Q: How do I send money to exchanges / use payment ID?**

    A: In simplewallet.exe, type `transfer 3 addresstheygaveyou amount -p IDTHEYGAVEYOU`

* **Q: What is mixin?**

    A: Mixin is how many times your transaction ix "mixed" with others for obfuscation and privacy. Most people suggest a mixin of 3. Larger mixin's will take longer to be confirmed unless a higher fee is used. A mixin of 0 can be used to have a non private transaction.

* **Q: How can I view my balance?**

    A: If your TurtleCoind.exe is fully synced, in simplewallet.exe, simply type `balance`

* **Q: I'm seeing an error like this in TurtleCoind.exe: `2018-Jan-25 23:18:34.620941 WARNING Transaction 862689940f8860b4410a4eef7be326b05aedc6b14a26e68e503769017ee80359 is not valid. Reason: Transaction uses spent key image`. Should I worry?**

    A: No, this is due to large transactions getting resubmitted on the network, and will be hidden from users in a later release of the software.

* **Q: I'm seeing an error like this in TurtleCoind.exe: `2018-Jan-26 01:51:56.920444 INFO [45.50.5.81:24899 INC] Tx verification failed`. Should I worry?**

    A: No, this is a variable that has not been assigned, and will be hidden from users in a later release of the software.

* **Q: How long does it take to sync TurtleCoind.exe?**

    A: Currently it takes around 1-2 hours. This number will increase as more people use the coin and the blockchain gets larger. Want to skip the syncing? See "Can I skip the syncing?"

* **Q: Can I skip the syncing?**

    A: Yes, you can currently use a public node with simplewallet. The keys stay on your PC, so it's secure. Run `simplewallet.exe --daemon-host daemon.turtle.link --daemon-port 11898` in a cmd. Thanks to @tom daemon.turtle.link p11898 for running this node.

* **Q: Can I speed up the syncing of the blockchain?***

    A: You can grab a recent copy of the blockchain and incrementally sync from there.  See [How to Bootstrap the TurtleCoin Blockchain](HowToBootstrapBlockchain.md) for instructions.

* **Q: What does it mean if my balance is locked?**

    A: This is a transfer which hasn't been confirmed by the network yet. It will move into your main balance shortly.

* **Q: In simplewallet.exe, I get an error `Error: failed to save new wallet: boost::filesystem::unique__path: Keyset as registered is invalid`. How can I fix it?**

    A: This is caused by some broken windows crypto keys. Navigate to C:/Users/*Your Windows Username*/AppData/Roaming/Microsoft/Crypto/RSA/. There should be a folder in there, with a long name, like `S-1-5-21-1416222650-108526586-4052533318-1000`. Enter this folder, and delete the files in there. Then reboot.

* **Q: When I open TurtleCoind on a Mac, I get an error `Illegal instruction: 4`. How can I fix it?**

    A: This is a known issue with older macs or un-updated macs. The current advice is to use the new build which should fix it for most people - http://latest.turtlecoin.lol . If this doesn't fix it, compiling on your machine may fix it. See the instructions here - https://github.com/turtlecoin/turtlecoin#apple . The new build should work on machines High Sierra or upwards, unless they are quite old. Machines from 2013 have been confirmed working, whilst an older 2010 machine does not.

## Other

* **Q: Are there any GUI wallets?**

    A: Yes, there are currently 3 GUI wallets in development, along with some mobile wallets too. They may not be ready for full use yet, or working on your operating system however. Currently, the desktop-xamarin wallet is the most supported and actively developed. Thanks to @therealcrypt for his great work on this.
  * https://github.com/turtlecoin/desktop-xamarin
  * https://github.com/rocksteadytc/ooze
  * https://github.com/turtlecoin/turtle-wallet
  
* **Q: Why does TRTL have such a high amount of tokens/small amount of decimal places?**

    A: Read the great post about the justification for it here: https://medium.com/@turtlecoin/one-trillion-turtles-coin-supply-and-unit-economics-5bfbea0aa1f1

* **Q: Where can I get some free TRTL?**

    A: Head over to the faucet: https://faucet.trtl.me/ and enter your TRTL address. The amount you can recieve is limited, to share the TRTL's for all. Thanks to @madk for creating this.
    
* **Q: Are there any light wallets / mobile wallets?**

    A: None are ready for usage right now, but they are being worked on. Check the dev channels in discord to see how people are getting on, and feel free to join in if you're a programmer!

* **Q: What is the #raindance channel / how does it work?**

    A: 
  * Someone, or multiple people (possibly you!) donate to the bot.
  * The balance of the bot reaches 10,000 TRTL or more.
  * The bot will make an announcement in the raindance channel that it will rain soon (TUT TUT, IT LOOKS LIKE RAIN...).
  * The bot adds 10 emotes to its message and changes the image and message to "QUICK, SEND ME YOUR WALLET ADDRESSES!"
  * You now have 90 seconds to DM your wallet address to the bot. The bot will respond with an emote.
  * React to the message in the raindance channel with the given emote.
  * After 90 seconds, the bot will announce the payment, e.g. (20000 TRTL WAS GIVEN TO 42 TURTLES).
  * This money is split evenly between everyone who correctly followed the instructions.
  * Thank you to @MoonMoonDogo for creating this!
    
* **Q: Where is the blockchain stored?**

    A: On Windows, it is in `appdata/roaming/turtlecoin`. On Mac and Linux, it is in `~/.turtlecoin`.

* **Q: I have a question which wasn't answered here, what should I do?**

    A: Join the discord, and come to the #help channel, we'll try and fix any issues: http://chat.turtlecoin.lol/
