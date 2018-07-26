# How to Mine TurtleCoin with an SBC

This guide will get you started mining TurtleCoin on a Raspberry Pi or similar SBC (single-board computer).

## Setup

Make sure you've already created a wallet on your PC. You'll need the wallet address to store any coins you mine. Follow the guide [here](Using-Zedwallet) to get started (follow the guide for Linux).

For the SBC, download the latest non-desktop version of [Raspbian](https://www.raspberrypi.org/downloads). Follow their installation guide on how to write the OS image onto the MicroSD card. Once you've plugged in the SD Card, booted the Raspberry Pi, and connected it to the internet, run the following commands:

```
sudo apt-get update && sudo apt-get upgrade
```

This may take a few minutes. Next, we'll have to install some required tools to compile and run the miner. Enter this command:

```
sudo apt-get install git automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev make g++ unzip
```
## Install the Miner

Next, we need to obtain a CPU miner. We'll use `rPi-xmrig-gcc7.3.0`


1. Download the `.zip` source code from the [Releases page](https://github.com/auto-joe/rPi-xmrig-gcc7.3.0/releases/latest)

```
wget https://github.com/auto-joe/rPi-xmrig-gcc7.3.0/archive/2.6.0-beta1.zip
```

2. Download it to a directory of your choice and extract it to a folder called `rPi-xmrig`, or anything of your choice.

```
unzip 2.6.0-beta1.zip -d / rPi-xmrig
```


## Configure and Run the Miner

Open the file `start.sh` with a text editor and replace the existing parameters with these-


```shell
./xmrig -a cryptonight-lite --variant=1 -u TRTL... -p x -o [pool address]
```

* Instead of `TRTL...`, simply paste your TurtleCoin wallet address.

  If you don't have one yet, you can generate a [paper wallet](Making-a-Paper-Wallet) to mine towards for now, and later import into a CLI or GUI wallet.

* In place of `[pool address]`, you'll need to choose a pool to mine towards. You can check the full list [here](Pools).

Then start the miner-

```shell
./start.sh
```

After entering this command, the miner will start scanning your hardware and begin to mine.

Happy mining! :)

# How to Compile xmrig Step by Step

The following guide will show you how to compile a CPU miner (xmrig) yourself. **If you're going to mine with a Raspberry Pi 3 the guide above will give you the highest hash rate.** [Auto-Joe](https://github.com/auto-joe/) provides two different repositories. They are well optimized for the Raspberry Pi 3 and the Orange Pi Zero. This guide may be interesting for people who own SBCs that are not as widely known as the Raspberry Pi.

What are the benefits of compiling xmrig from scratch?
  - You'll have the most up-to-date version of xmrig
  - You can optimize xmrig for specific SBCs (improves hash rate)
  - You can compile xmrig with different releases of GCC (may improve hash rate)
  - It's possible to disable certain features of xmrig ([more info](https://github.com/xmrig/xmrig/wiki/Ubuntu-Build#additional-cmake-options))
  
## Setup

First we want to make sure your SBC's software is up to date:

```
sudo apt-get update && sudo apt-get upgrade
```

After that's done, we're going to install some tools that are important for the process:

```
sudo apt-get install git build-essential cmake make libuv1-dev libmicrohttpd-dev gcc g++ automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev
```

## Compiling xmrig

At this step we'll obtain the latest binaries of xmrig and create a directory called `build`:

```
cd ~
git clone https://github.com/xmrig/xmrig.git
cd xmrig && mkdir build && cd build
```

Now we specify the build flags to optimize xmrig for your SBC in particular. You'll have to **choose between one of these**:

for any SBC:
```
cmake ..
```

for the Raspberry Pi 2:
```
cmake .. -DCMAKE_C_FLAGS="-mcpu=cortex-a7 -mtune=cortex-a7" -DCMAKE_CXX_FLAGS="-mcpu=cortex-a7 -mtune=cortex-a7"
```

for the Raspberry Pi 3:
```
cmake .. -DCMAKE_C_FLAGS="-mcpu=cortex-a53 -mtune=cortex-a53" -DCMAKE_CXX_FLAGS="-mcpu=cortex-a53 -mtune=cortex-a53"
```

for the Asus Tinker Board:
```
cmake .. -DCMAKE_C_FLAGS="-march=armv7-a" -DCMAKE_CXX_FLAGS="-march=armv7-a"

```

You may find the right flags for your board [here](https://gist.github.com/fm4dd/c663217935dc17f0fc73c9c81b0aa845).
I was only able to test these on a Raspberry Pi 2 and the Asus Tinker Board. Also, this guide is not perfect, so **feel free to add/edit flags or devices**!

To finish the compilation type:

```
make
```

To speed up the compilation you can add `-j [amount_of_CPU_cores]`. On a Raspberry Pi 2/3 this would be `make -j 4` for example.

## Configuring and Running xmrig

This part is almost the same as in the guide above. The only difference is, that first we need to create `start.sh`. I've used `nano` for this, but any other text editor should also work fine:

```
sudo nano start.sh
```
Your terminal should look a bit different now. Paste the following line:
```
./xmrig -a cryptonight-lite --variant=1 -u TRTL... -p x -o [pool address]
```

* Instead of `TRTL...`, simply paste your TurtleCoin wallet address.

  If you don't have one yet, you can generate a [paper wallet](Making-a-Paper-Wallet) to mine towards for now, and later import into a CLI or GUI wallet.

* In place of `[pool address]`, you'll need to choose a pool to mine towards. You can check the full list [here](Pools).

When you're done with that, press: 

`CTRL + O` to save, confirm with `Enter`. And after that, hit `CTRL + X` to close the file.

Then start the miner:

```
sudo sh start.sh
```

After entering this command, the miner will start scanning your hardware and begin to mine.

[Congratulations](https://www.youtube.com/watch?v=SC4xMk98Pdc)! You did it! :)

