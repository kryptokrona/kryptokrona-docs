# Mining

Mining TurtleCoin is fun, fast, and easy. This guide will help you get started.

## Mining Software

TurtleCoin can be mined with a number of mining tools, particularly just about any Monero or Cryptonote-compatible miner. Totally radical, dude!

### XMR-Stak

#### Downloading and Installing

##### Windows

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest) - This will auto-detect your hardware, and tune everything for you.

2. Make a folder called **TurtleCoin Miner** on your desktop and unzip the file you just downloaded for XMR-Stak in there.

3. Double-click on `xmr-stak.exe`.

4. Click yes when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

5. Check [XMR-Stak Setup and Configuration](https://github.com/turtlecoin/turtlecoin/wiki/Mining#xmr-stak-setup-and-configuration)

##### Linux

Native binaries may be available for your distribution's package manager. 

If no binaries are available, or you prefer to compile, follow these instructions-

##### Ubuntu 16.04

*Guide sponsored by Monerise*

1. If you want to use your GPU for mining, do the following-

* for AMD GPU’s- 

    * Install drivers for your card

    * download the latest APP SDK from [here](https://developer.amd.com/amd-accelerated-parallel-processing-app-sdk/). It should have the name `AMD-APP-SDKInstaller-v(version number)-GA-linux64.tar.bz2`

         * Extract it

         * Open the terminal wherever it is located

        * (optional) name it to something simpler

        * In the terminal, type `./(name).sh`

        * After installing, you should be good.

* for nVidia GPU’s-

    * Install drivers for your card

    * Download the latest CUDA Toolkit from [here](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64).

        * Download the base installer and follow the compilation instructions

        * Download every patch one-by-one in order and apply the patches

        * After that, you should be good.

2. Open the terminal and install dependencies by running this command- 

     ```sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev```

3. Clone the package- 

      `git clone https://github.com/fireice-uk/xmr-stak.git`

4. To remove donations, type-

     `gedit xmr-stak/xmrstak/donate-level.hpp`

* Change-

      `constexpr double fDevDonationLevel = 2.0 / 100.0;`

* to

       `constexpr double fDevDonationLevel = 0.0 / 100.0;`

 5. Make a directory- 

       `mkdir xmr-stak/build`

6. Move over there-  

      `cd xmr-stak/build`

7. Run cmake-

      `cmake ..`

* If you don’t have nVidia GPUs, type-
      
      `cmake .. -DCUDA_ENBALE=OFF`

* If you don’t have AMD GPUs, type-

      `cmake .. -DOpenCL_ENABLE=OFF`

* If you have neither (only CPU mining) type-

      `cmake .. -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF`

8. Finish building it-

     ` make install`

9. xmr-stak will now be located in `/home/user/xmr-stak/build/bin`

10. In the terminal, type- (install if not installed)-

    `ccmake ..`

11. Using the Up and Down arrows, scroll to the 2nd page. Then, on `XMR-STAK_CURRENCY`, press enter to change it to `monero` (if needed, you can make personal tweaks by reading the descriptions of each value)

12. Once you're done, press `c` and then `g` on your keyboard. 

13. Type- 

     `./xmr-stak`

14. Check [XMR-Stak Setup and Configuration](https://github.com/turtlecoin/turtlecoin/wiki/Mining#xmr-stak-setup-and-configuration)
  
15. If you see something like this, that means it’s working!

![workubuntu](https://i.imgur.com/11vpVXm.png)

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

## Mining Pools

- auspool.turtleco.in
- cryptoknight.cc/turtle
- etnchina.io/trtl
- slowandsteady.fun
- trtl.mine2gether.com
- trtl.ninja
- trtl.flashpool.club
- trtl.blockchainera.net
- eu.turtlepool.space
- us.turtlepool.space
- hk.turtlepool.space
- turtlecoinpool.ml
- turtle.mining.garden
- turtle.atpool.party
- z-pool.com
- trtl.semipool.com

## Checking Balances and Payments

To check the earned balance, payments from the pool, and statistics, go to the URL of the pool you are mining on type your public TRTL wallet address into the search box in the middle of the page(location may vary based on pool).
![image](https://user-images.githubusercontent.com/34389545/34903526-17cf3536-f7f9-11e7-98fd-580bdcf3faed.png)
You can also see how far until the next payout by clicking "Payments" at the top of the screen(again, location may vary based on pool).
![image](https://user-images.githubusercontent.com/34389545/34903536-36bb8904-f7f9-11e7-8b92-d886ba15bdc5.png)

## Cloud Mining

### Google Cloud Platform (GCP) Mining

Get started with GCP at https://cloud.google.com/compute/docs/quickstart-linux. Once you have a GCP instance, SSH into it and enter:

```bash

sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git

git clone https://github.com/fireice-uk/xmr-stak.git

mkdir xmr-stak/build

cd xmr-stak/build

cmake -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF ..

make install

cd bin

./xmr-stak
```
Now, follow the [XMR-Stak Setup and Configuration](#xmr--stack-setup-and-configuration) instructions.

## Mining with RaspberryPi/SBC

See [Mining with SBC](Mining-with-SBC).
