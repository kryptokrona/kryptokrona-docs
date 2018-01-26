# Frequently Asked Questions

## Mining

* **Q: How do I get started mining?**

    A: http://mining.turtlecoin.lol/

* **Q: I'm using a Mac, can I still mine?**

    A: Yes, you can follow the guide for windows, but you'll need to compile xmr-stak yourself: https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_MacOS.md

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
  * If you're using a nvidia card, open up nvidia.txt, in the same directory as the xmr-stak.exe. Try setting bfactor to 8 and bsleep to 100, and then reload your miner after saving the file. If it's still laggy, try increasing both values slightly. This will cause you to get less hashes per second, but can let you use your PC more effectively. You can try tweaking the value to increase your hashrate. Some people also achieve success by lowering the thread count.
  * If you're using an amd card, there should be an intensity value you can lower in amd.txt.
  * If you're using just a CPU, you can delete the cores being used from cpu.txt.

* **Q: How can I only mine with my gpu/cpu?**

    A: If you are using xmr-stak, you can make a batch file to start the miner. You can then use the commands `--noCPU`, `--noNVIDIA`, and `--noAMD` as needed. For example, put the following in a .txt file, change the extension to .bat, and then double click the file: `xmr-stak.exe --noCPU`. This will run the miner without using the CPU.

* **Q: My miner is crashing on startup. What am I doing wrong?**

    A: If you are using a nvidia card, try opening nvidia.txt in the same directory as the xmr-stak.exe, and lowering the value for threads until it stops crashing.

* **Q: I got banned from my mining pool. Why?**

    A: If you submit lots of invalid shares, a pool might ban you. The reason for invalid shares can be your hardware getting overworked, high ping to the pool, or your difficulty being set to low. You should get unbanned after approximately 20 minutes. This is a good time to setup some backup pools!

* **Q: Should I set up multiple pools?**

    A: Yes, in case you get banned, or a pool goes down for sometime, you can keep mining. A good amount to have would be at least three.

* **Q: I get a socket error when connecting to a pool. What am I doing wrong?**

    A: Generally, this is due to an incorrectly configured config. In the directory where your xmr-stak.exe is, there should be a file called `config.txt`. Open this up, and check that it looks similar to this: `{"pool_address" : "eu.turtlepool.space:3333", "wallet_address" : "TRTLv2Fyavy8CXG8BPEbNeCHFZ1fuDCYCZ3vW5H5LXN4K2M2MHUpTENip9bbavpHvvPwb4NDkBWrNgURAd5DB38FHXWZyoBh4wW", "pool_password" : "x", "use_nicehash" : false, "use_tls" : false, "tls_fingerprint" : "", "pool_weight" : 10 },`. Your wallet address is the address starting with TRTL, not your wallet filename. Some users have experienced issues with their firewall or antivirus as well however, so perhaps try disabling these if you are experiencing this.

* **Q: What does pool weight mean?**

    A: Pool weight determines what order pools are used in case another is unavailable. A higher weight is a higher priority, so If you have three pools, with weight 3, 2, and 1, the pool with weight 3 will be used unless you disconnect from it, in which case you will go to the pool with weight 2, and then weight 1 if necessary.

* **Q: What pool should I chose?**

    A: There are a few factors to consider when choosing a pool. One is your ping, you can find this out by pinging the server in command prompt, by typing `ping address.com`. Another is the hashrate of the pool. If you go on the pools website, you can see how often they find blocks. If the pool takes a long time to find a block, your stats will take a long time to update. Finally, the minimum payouts can be significant if you're a small miner. This is the amount you need to mine before you get paid. Most pools will list this under the "payment" tab.

* **Q: How many hashes per second is good for my hardware?**

    A: http://monerobenchmarks.info/ is a good source for this. Look up your CPU and GPU with these links: http://monerobenchmarks.info/searchCPU.php http://monerobenchmarks.info/searchGPU.php

## Wallet / TurtleCoind issues

* **Q: I've opened the wallet, and I'm getting lots of red messages with an error like this: `2018-Jan-25 20:31:24.088189 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:7, Can't connect to daemon`**

    A: You need to also open up TurtleCoind.exe and let it sync. TurtleCoind is your connection to the network, and needs to be open and synced whenever you want to use your wallet.

* **Q: I've opened the wallet, and I'm getting lots of red messages with an error like this, and I can't type: `2018-Jan-25 21:59:57.595104 ERROR   [BlockchainSynchronizer] Failed to query outdated pool transaction: NodeErrorCategory:3, Network error`**

    A: Your daemon hasn't finished syncing yet. Keep TurtleCoind.exe open, and wait until you are 0 days behind the current block, and it should print out a green message saying "SYNCHRONISED OK"

* **Q: I made a paper wallet, how do I use it?**

    A: Once you've opened TurtleCoind.exe and let it sync, open up simplewallet.exe and type `i` to import. It will then ask you to choose a new wallet name, and a password. Once you have done that, it will prompt you for your two keys, the view key, and spend key. You should have got these when you made your paper wallet.

* **Q: How do I backup my wallet?**

    A: If your TurtleCoind.exe is open and synced, open simplewallet.exe, and type `export_keys`. Save the view and spend key somewhere safe, and you can use them to reimport your wallet if you lose it.

* **Q: I think I should have more money in my balance than it is showing, what should I do?**

    A: In simplewallet.exe, type `export_keys`, and save these two. Then, type `reset`, and close TurtleCoind.exe and simplewallet.exe, and reopen them both.

* **Q: How do I send money with turtlecoin?**

    A: In simplewallet.exe, enter `transfer 3 address amount`, where address is your address starting with TRTL, and amount is the amount you want to send. Currently, the fee to transfer is 0.1 TRTL's, so you need to send a tiny bit less than your entire balance.

* **Q: How do I send money to exchanges / use payment ID?**

    A: In simplewallet.exe, type `transfer 3 addresstheygaveyou amount -p IDTHEYGAVEYOU`

* **Q: How can I view my balance?**

    A: If your TurtleCoind.exe is fully synced, in simplewallet.exe, simply type `balance`

* **Q: I'm seeing an error like this in TurtleCoind.exe: `2018-Jan-25 23:18:34.620941 WARNING Transaction 862689940f8860b4410a4eef7be326b05aedc6b14a26e68e503769017ee80359 is not valid. Reason: Transaction uses spent key image` Should I worry?**

    A: No, this is due to large transactions getting resubmitted on the network, and will be hidden from users in a later release of the software.

* **Q: How long does it take to sync TurtleCoind.exe?**

    A: Currently it takes around 1-2 hours. This number will increase as more people use the coin and the blockchain gets larger.

## Other

* **Q: Are there any GUI wallets?**

    A: Yes, there are currently 3 GUI wallets in development, along with some mobile wallets too. They may not be ready for full use yet, or working on your operating system however.
  * https://github.com/rocksteadytc/ooze
  * https://github.com/turtlecoin/turtle-wallet
  * https://github.com/turtlecoin/desktop-xamarin

* **Q: I have a question which wasn't answered here, what should I do?**

    A: Join the discord, and come to the #help channel, we'll try and fix any issues: http://chat.turtlecoin.lol/
