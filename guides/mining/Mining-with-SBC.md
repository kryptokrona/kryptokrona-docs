# Mining TurtleCoin with an SBC

This guide will get you started mining TurtleCoin on a Raspberry Pi or similar SBC(single-board computer)

## Setup

Make sure you've already created a wallet on your PC. You'll need the wallet address to store any coins you mine. Follow the guide [here](https://github.com/turtlecoin/turtlecoin/wiki/Getting-Started) to get started(follow the guide for linux).

For the SBC, download the latest non-desktop version of [Raspbian](https://www.raspberrypi.org/downloads). Follow their installation guide on how to write the OS image onto the MicroSD card. Once you've plugged in the SD Card, booted the Raspberry Pi, and connected it to the internet, run the following commands:

	
	sudo apt-get update && sudo apt-get upgrade
    

This may take a few minutes. Next, we'll have to install some required tools to compile and run the miner. Enter this command:

	
	sudo apt-get install git automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev make g++
	

## Install the Miner

Next, we need to obtain a CPU miner. Use cpuminer-multi:

	
	git clone https://github.com/tpruvot/cpuminer-multi
	
	
Let's now move to that directory and install the miner:

	
	cd cpuminer-multi
	./autogen.sh
	./configure --disable-assembly CFLAGS="-Ofast -march=native" --with-crypto --with-curl
	sudo make install
	
	
## Configure and Run the Miner

Finally, we can run the miner with the following parameters:

	
	cpuminer -a cryptonight -o stratum+tcp://[YOUR POOL HERE] -u [YOUR WALLET ADDRESS HERE] -p x
	
	
You'll need to select a pool to participate in for the first `-o` parameter. Pick one that is closest to your location. Make sure to include the port number as well. Here is the current list:

**z-pool.com:3333 (EU North)**

**hk.turtlepool.space:3333 (Hong Kong)**

**pool.turtleco.in:3333 (USA West Coast)**

**auspool.turtleco.in:3333 (AUS)**

**eu.turtlepool.space:3333 (UK)**

**us.turtlepool.space:3333 (USA South)**

**ny.minetrtl.us:3333 (USA NYC)**

**trtl.mine2gether.com:3335**

**turtle.atpool.party:3333 (France)**

**78.46.85.142:4902** (CryptoKnight)

**118.31.18.78:5555** (ETNChina)

**trtl.flashpool.club:5555** (for `Claymore-cryptonote-10.2`, use port `7443` ONLY)

**trtl.blockchainera.net:6666**

**pool.trtl.ninja:5555**

**turtle.mining.garden:5555**

For the `-u` parameter, simply paste your TurtleCoin wallet's address.

After entering this command, the miner will start scanning your hardware and begin to mine. Happy mining!
