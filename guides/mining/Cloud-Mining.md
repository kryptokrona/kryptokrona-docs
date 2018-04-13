# Welcome to TurtleCoin! 
#### Get started mining with Google Cloud Platform (GCP)




### Get started with TurtleCoin
See:  https://github.com/turtlecoin/turtlecoin/wiki/How-To-Mine-TurtleCoin-on-Windows


### Get started with GCP
See:  https://cloud.google.com/compute/docs/quickstart-linux


###  Mining Instructions For Debian Linux on GCP
SSH into GCP instance and enter:

`sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git`

`git clone https://github.com/fireice-uk/xmr-stak.git`

`mkdir xmr-stak/build`

`cd xmr-stak/build`

`cmake -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF ..`

`make install`

`cd bin`

`./xmr-stak`


### Configure XMR-Stak Miner

1. When it asks if you want to mine Monero or Aeon, choose `MONERO`

2. When it asks which pool to use, put one in from the list below. Start with the one closest to you. Multiple pools is a good idea in case the one you're mining on goes down.

3. When it asks for "Username" just type in your TRTL wallet address. If you don't want to sync a blockchain and make your wallet later, you can make a paper wallet [here](https://turtlecoin.lol/wallet)

4. Password is `x`

5. TLS is fine to say `no` in most cases

6. Do you want to use NiceHash? `no`

7. Do you want to use multiple pools? `yes`
Add all of the pools in the list from step 6, and give them all a weight of 10 if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.

8. Done! The miner will now start scanning your hardware and will begin mining.


### Mining Pools

#### z-pool.com:3333 (EU North)

#### hk.turtlepool.space:3333 (Hong Kong)

#### pool.turtleco.in:3333  (USA West Coast)

#### auspool.turtleco.in:3333 (AUS)

#### eu.turtlepool.space:3333 (UK)

#### us.turtlepool.space:3333 (USA South)

#### ny.minetrtl.us:3333 (USA NYC)

#### trtl.mine2gether.com:3335 (Germany)

#### turtle.atpool.party:3333 (France)

#### 78.46.85.142:4902 (CryptoKnight)

#### 118.31.18.78:5555 (ETNChina)

#### trtl.flashpool.club:5555 (for `Claymore-cryptonote-10.2`, use port `7443` ONLY)

#### trtl.blockchainera.net:6666

#### pool.trtl.ninja:5555

#### turtle.mining.garden:5555
 
#### pool.trtl.semipool.com:3333 (US Miami, FR Paris)

Credits: Thanks to Bebop TC.  This document borrows heavily from https://github.com/turtlecoin/turtlecoin-wiki/blob/master/How-To-Mine-TurtleCoin-on-Windows. 
