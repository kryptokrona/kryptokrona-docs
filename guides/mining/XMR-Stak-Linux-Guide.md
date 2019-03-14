# How to Set Up XMR-Stak on Linux

Native binaries may be available for your distribution's package manager.

Precompiled binaries are available [here](https://github.com/fireice-uk/xmr-stak/releases)

To compile from source, see the build instructions for your system [here](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_Linux.md)

## XMR-Stak Setup and Configuration

On the first launch, XMR-Stak will ask you some setup questions:

1. `Please enter: - Do you want to use the HTTP interface? Unlike the screen display, browser interface is not affected by the GPU lag. If you don't want to use it, please enter 0, otherwise enter port number that the miner should listen on`

Enter `0`, if your unsure what to put here.

2.
```
- Please enter the currency that you want to mine: 
	- aeon7
	- bbscoin
	- bittube
	- cryptonight
	- cryptonight_bittube2
	- cryptonight_masari
	- cryptonight_haven
	- cryptonight_heavy
	- cryptonight_lite
	- cryptonight_lite_v7
	- cryptonight_lite_v7_xor
	- cryptonight_r
	- cryptonight_superfast
	- cryptonight_turtle
	- cryptonight_v7
	- cryptonight_v8
	- cryptonight_v8_double
	- cryptonight_v8_half
	- cryptonight_v8_reversewaltz
	- cryptonight_v8_zelerius
	- cryptonight_v7_stellite
	- cryptonight_gpu
	- cryptonight_conceal
	- freehaven
	- graft
	- haven
	- lethean
	- masari
	- monero
	- qrl
	- ryo
	- stellite
	- turtlecoin
	- plenteum
	- zelerius
	- xcash
```
*       Enter `cryptonight_turtle`

3. `- Pool address: e.g. pool.example.com:3333`

Choose a pool from any of the [available pools](Pools) that is **closest to you** and enter its URL (you will be able to add additional pools later).

4. `- Username (Wallet address or pool login):`  

See our [making a wallet](Making-a-Wallet) guide if you don't have an address, otherwise paste it here.

NOTE: your exact configuration may vary depending on your choice of pool; check your pool's 'Getting Started' guide.

5. `- Password (mostly empty or x):`  

Enter `x` or leave it empty.

6. `- Rig identifier for pool-side statistics (needs pool support). Can be empty:`

Type a name or leave it empty.

7. `- Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  

In most cases, `n` is fine.

8. `- Do you want to use nicehash on this pool? (y/n)`  

Enter `n`.

9. `- Do you want to use multiple pools? (y/n)`  

* Enter `y` if you would like to add more pools.

* XMR-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.

Done! The miner will now start scanning your hardware and will begin mining. Awesome!

If you see something like this, that means it’s working:

![workubuntu](guides/mining/images/xmrstak-ubuntuwork.png)

XMR-Stak will save your configuration in `config.txt`/ `pools.txt`/ `cpu.txt`/ `amd.txt`/ `nvidia.txt` in the directory from which it was first run.

Run XMR-Stak again from the same directory to reuse the configuration.
