---
title: Mining with a SBC
---

The following guide will show you how to compile a CPU miner (XMRig) for SBCs like the Raspberry Pi.

If you're using a RPi3 or RPi3B+, check out [this guide](/guides/mining/Optimizing-RPi-TurtleCoin-Mining) for a more optimized setup.

What are the benefits of compiling XMRig from scratch?
  - You'll have the most up-to-date version of XMRig
  - You can optimize XMRig for specific SBCs (improves hash rate)
  - You can compile XMRig with different releases of GCC (may improve hash rate)
  - It's possible to disable certain features of XMRig ([more info](https://github.com/xmrig/xmrig/wiki/Ubuntu-Build#additional-cmake-options))
  
## Setup

First we want to make sure your SBC's software is up to date:

```
sudo apt-get update && sudo apt-get upgrade
```

After that's done, we're going to install some tools that are important for the process:

```
sudo apt-get install git build-essential cmake make libuv1-dev libmicrohttpd-dev gcc g++ automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev
```

## Compiling XMRig

At this step we'll obtain the latest binaries of XMRig and create a directory called `build`:

```bash
cd ~
git clone https://github.com/xmrig/xmrig.git
cd xmrig && mkdir build && cd build
```

Now we specify the build flags to optimize XMRig for your SBC in particular. You'll have to **only choose one of these**:

* for any SBC:
```
cmake ..
```

* for the Raspberry Pi 2:
```bash
cmake .. -DCMAKE_C_FLAGS="-mcpu=cortex-a7 -mtune=cortex-a7" -DCMAKE_CXX_FLAGS="-mcpu=cortex-a7 -mtune=cortex-a7"
```

* for the Raspberry Pi 2 if the command above doesn't work:
```bash
cmake .. -DARM_TARGET=7
```

* for the Raspberry Pi 3:
```bash
cmake .. -DCMAKE_C_FLAGS="-mcpu=cortex-a53 -mtune=cortex-a53" -DCMAKE_CXX_FLAGS="-mcpu=cortex-a53 -mtune=cortex-a53"
```


* for the Raspberry Pi 4:
```bash
cmake .. -DCMAKE_C_FLAGS="-mcpu=cortex-a72 -mtune=cortex-a72" -DCMAKE_CXX_FLAGS="-mcpu=cortex-a72 -mtune=cortex-a72"
```

* for the Asus Tinker Board:
```bash
cmake .. -DCMAKE_C_FLAGS="-march=armv7-a" -DCMAKE_CXX_FLAGS="-march=armv7-a"

```

You may find the right flags for your board [here](https://gist.github.com/fm4dd/c663217935dc17f0fc73c9c81b0aa845).
I was only able to test these on a Raspberry Pi 2 and the Asus Tinker Board. Also, this guide is not perfect, so **feel free to add/edit flags or devices**!

To finish the compilation type:

```
make
```

To speed up the compilation you can add `-j [amount_of_CPU_cores]`. On a Raspberry Pi 2/3 this would be `make -j 4` for example.

## Configuring and Running XMRig

First we need to copy `config.json` to the same directory the XMRig executable is located:

```
cp ~/xmrig/src/config.json config.json
```

Now we have to edit the configuration file properly. In this guide we'll be using `nano`, but any other text editor should also work fine:

```
nano config.json
```

Your terminal should display the contents of `config.json`. 

* In order to mine Kryptokrona, we tell XMRig what algorithm you want to mine. Look out for the `"algo":` setting and change it to `"algo": "cryptonight-pico/trtl",`

* In place of `"url": "donate.v2.xmrig.com:3333",` you'll need to choose a pool to mine towards. Make sure to choose the right port. You can learn more about choosing a pool [here](/guides/mining/Pools).

* Instead of `"user": "YOUR_WALLET_ADDRESS",` simply paste your Kryptokrona wallet address.

  If you don't have one yet, you can find out how to create a wallet [here](/guides/wallets/Making-a-Wallet).

When you're done with that, press: 

`CTRL + O` to save, confirm with `Enter`. And after that, hit `CTRL + X` to close the file.

Then start the miner:

```
./xmrig
```

After entering this command, the miner will start scanning your hardware and begin to mine.

Congratulations! You did it! :)
