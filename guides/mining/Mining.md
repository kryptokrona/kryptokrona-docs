# Mining

Mining TurtleCoin is fun, fast, and easy. This guide will help you get started.

## Mining Software

TurtleCoin can be mined with a number of mining tools, particularly just about any Monero or Cryptonote-compatible miner. Totally radical, dude!

### XMR-Stak

#### Downloading and Installing

##### Windows

1. Download and install [TRTL-Stak Unified Miner](https://github.com/turtlecoin/trtl-stak/releases/latest), a modified version f XMR-Stak to work with TurtleCoin's algorithm changes. It will auto-detect your hardware, and tune everything for you.

  - If you want to mine with your CPU, download the file called `xmr-stak-turtlecoin-win64-CPU-CUDA9-OpenCL.zip`
  - If you want to mine with an AMD GPU, download the file called `xmr-stak-turtlecoin-win64-CPU-CUDA9-OpenCL.zip`
  - If you want to mine with a nVidia GPU, it depends-
    * For 7XX series GPU's and older, download `xmr-stak-turtlecoin-win64-CPU-CUDA8-OpenCL.zip`
    * For any cards newer than the 9XX series, download `xmr-stak-turtlecoin-win64-CPU-CUDA9-OpenCL.zip`

2. Make a folder called **TurtleCoin Miner** on your desktop and unzip the file you just downloaded for XMR-Stak in there.

3. Double-click on `xmr-stak.exe`.

4. Click `Yes` when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

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

      `git clone https://github.com/turtlecoin/trtl-stak.git`

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

See https://github.com/turtlecoin/trtl-stak/blob/add_turtlecoin/doc/compile.md and https://github.com/turtlecoin/trtl-stak/blob/add_turtlecoin/doc/compile_macOS.md

#### TRTL-Stak Setup and Configuration

Upon first launching TRTL-Stak, the software will ask you several setup and configuration questions.

1. `Please enter:
- Do you want to use the HTTP interface?
Unlike the screen display, browser interface is not affected by the GPU lag.
If you don't want to use it, please enter 0, otherwise enter port number that th
e miner should listen on`

Enter `0`, if you are like most people, and do not need to remotely check your hashrate.

If you do need to, then enter a port number. 
Let's take the port number as `0101` and your IP address as `26.24.105.14` as an example.

To check the hashrate, enter in the address bar of your web browser, `<26.24.105.14>:<0101>`. It should show a page with your rig's hashrate.
If you are checking from the same IP address, you can alternatively enter, `localhost:<0101>`

Make sure to enter your own IP address if you enable this feature. You can choose any port you want!

2. `Please enter:
- Please enter the currency that you want to mine:
        - aeon7
        - cryptonight
        - cryptonight_lite
        - edollar
        - electroneum
        - graft
        - intense
        - karbo
        - monero7
        - stellite
        - sumokoin
        - turtlecoin`
        
        
Enter `turtlecoin`


3. `- Pool address: e.g. pool.example.com:3333 `

Choose a pool from any of the [available pools](#mining-pools) that is **closest to you** and enter its URL (you will be able to add more later).

4. `- Username (Wallet address or pool login):`  

Enter your public TRTL address.  

 * If you have not yet downloaded and ran the TurtleCoin core software to sync the blockchain and create a wallet, you can make a [paper wallet](https://github.com/turtlecoin/turtlecoin/wiki/Setting-up-a-new-wallet#paper-wallet) to start mining towards now, and import the wallet later.

5. `- Password (mostly empty or x):`  

Enter `x`.

6. `- Rig identifier for pool-side statistics (needs pool support). Can be empty:`

Leave it empty and press enter.

7. `- Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  

In most cases, `N` is fine.

8. `- Do you want to use nicehash on this pool? (y/n)`  

Enter `n`(in case you do, enter `y`).

9. `- Do you want to use multiple pools? (y/n)`  

Enter `y` if you would like to add more pools. 
Give them all a weight of `10` if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  

TRTL-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.
If they are all given the same weight, it will connect to them in order of how they are listed, form top to bottom, in the configuration file.


If you are on Windows 7/8, it will ask for administrator permission again. Click `Yes` to grant it permission.
If you are on Windows 10, it will not ask for it again.

Done! The miner will now start scanning your hardware and will begin mining. Cowabunga dude!  

TRTL-Stak will save your configuration in `config.txt`  in the same directory from which it was first run. 
Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.

Run TRTL-Stak again from the same directory to reuse the configuration.

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

```
bash

sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git

git clone https://github.com/fireice-uk/xmr-stak.git

mkdir xmr-stak/build

cd xmr-stak/build

cmake -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF ..

make install

cd bin

./xmr-stak
```
Now, follow the [TRTL-Stak Setup and Configuration](#trtl--stack-setup-and-configuration) instructions.

## Mining with RaspberryPi/SBC

See [Mining with SBC](Mining-with-SBC).
