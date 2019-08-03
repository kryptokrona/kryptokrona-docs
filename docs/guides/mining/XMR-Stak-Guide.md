---
title: Mining with XMR-Stak
---

XMR-Stak is a unified miner, which means the same program will be used to mine with both your CPU and your GPU. It will automatically detect your hardware and adjust the settings accordingly.

## Downloading for Windows

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest). It will auto-detect your hardware, and tune everything for you.

2. Extract the file to a directory of your choice

3. Double-click on `xmr-stak.exe`.

4. Click `Yes` when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

5. Check how to [configure it](#xmr-stak-setup-and-configuration)

## Downloading and Installing for Mac

You will have to compile it yourself. See [here](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_macOS.md) for instructions.

Then, check how to [configure it](#xmr-stak-setup-and-configuration)

## Downloading and Installing for Linux

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest). It will auto-detect your hardware, and tune everything for you.
2. Extract the file to a directory of your choice
3. Double-click on `xmr-stak`
4. Check how to [configure it](#xmr-stak-setup-and-configuration)

### Compiling

If you'd like to compile XMR-Stak, see [the offical guide](https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_Linux.md) for instructions.

Then, check how to [configure it](#xmr-stak-setup-and-configuration)

## XMR-Stak Setup and Configuration

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.

1.  `Use simple setup method? (Y/n)`

    Press `Y` or just enter

2. 
```
Please enter:
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
	- graft
	- haven
	- lethean
	- masari
	- monero
	- qrl
	- ryo
	- torque
	- turtlecoin
	- plenteum
	- zelerius
	- xcash
``` 
Enter `cryptonight_turtle`

3.  `- Pool address: e.g. pool.example.com:3333`

    Choose a pool from any of the [available pools](Pools) that is **closest to you** and enter its URL (you will be able to add more later).

4.  `- Username (Wallet address or pool login):`

    Enter your TurtleCoin wallet address.

    - If you don't have one yet, you can find out how to create a wallet [here](../wallets/Making-a-Wallet)

5.  `- Password (mostly empty or x):`  

    Enter `x`.

6.  `- Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  

    In most cases, `N` is fine.


* If you are on Windows 7/8, it will ask for administrator permission again. Click `Yes` to grant it permission.
* If you are on Windows 10, it will not ask for it again.

Done! The miner will now start scanning your hardware and will begin mining. Awesome!


XMR-Stak will save your configuration in `config.txt`  in the same directory from which it was first run.  

Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`.  
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.

Run XMR-Stak again from the same directory to reuse the configuration.

### Advanced Configuration

In case you answer `n` to the first question(`Use simple setup method?`), the following questions will be asked, along with the ones covered above.
The order of the questions here may not be in order of questions asked by XMR-Stak.

1. 
```
Please enter:
- Do you want to use the HTTP interface?
Unlike the screen display, browser interface is not affected by the GPU lag.
If you don't want to use it, please enter 0, otherwise enter port number that the miner should listen on
```

Enter `0`, if you do not need to remotely check your hashrate(most people).

If you do need to, then enter a port number. Generally it is recommended to use a port number in the range 1025-65535.
For example purposes, lets say you used `1337` as the port.

To check the hashrate, enter in the address bar of your web browser, `localhost:1337`.  
Change the `1337` if you used a different port.

It should show a page with your rig's hashrate.

If you want to check your miners hashrate whilst you are on a different network, you will have to enter your computers IP address, followed by the port, for example, `198.51.100.0:1337`.

You can find your computers IP by visiting this website whilst on that computer: http://whatsmyip.org/

You will probably have to open the port you are running the interface on in your router admin panel. Instructions on how to do this are out of scope for this document.


2. `- Rig identifier for pool-side statistics (needs pool support). Can be empty:`

    Enter it if you know it, otherwise leave it empty and press enter.


3.  `- Do you want to use nicehash on this pool? (y/n)`  

    Enter `n`

4. `- Do you want to use multiple pools? (y/N)`

    This is recommended, so that your miner is still hashing if your pool goes down. However, it is not needed.  

- Enter `y` if you would like to add more pools.

* Give them all a weight of `10` if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  

* XMR-Stak will prioritize the highest weight pool, and fall back to the others if it cannot connect.

* If they are all given the same weight, it will connect to them in order of how they are listed, form top to bottom, in the configuration file.

### Tweaks and tricks for Xmrstak and Turtle ( CN/Pico currently ) ### 2.10.4+ 
(https://github.com/fireice-uk/xmr-stak/blob/master/doc/tuning.md)

Here will be information on Tips and Tricks to mine Turtle algo CN/Pico
- CPU tweaks and tips ( Core/ Thread count, Low_power_mode )
- GPU tweaks and tips ( Dual Threading, Work Size, Threads etc ) - in process
- OS tweaks and tips ( Large pages, which OS is better? )

So there is some explination of what each setting will do at the top of the cpu.txtw, (low_power_mode, no_prefetch, affine_to_cpu), but its pretty vague and confusing to most. I will discuss options that have been seen to be beneficial/ a performance increase. Each tweak/ tip can affect each system differently. As with everything, hardware differences and settings on your machine will influence the outcome. So play with the settings, but understand this is NOT an automatic or "Sure thing" on all systems.

like stated above, once you run XmrStak for the first time you will get 3 files created for you and placed in your XmrStak folder. 

Your configuration for pools(algorithm to mine, address, port etc) will be saved in `pools.txt`. ( no tweaks to be had in here ) 
The configuration of the device it mines(CPU/AMD/NVIDIA) will be saved in `cpu.txt`, `amd.txt` or `nvidia.txt`, respectively.

## CPU.txt ##

So lets talk about CPU.txt

This is where you will set your Core, Threads, and a few other tweaks. When you open the file you will see something like this
````
/*
 * Thread configuration for each thread. Make sure it matches the number above.
 * low_power_mode - This can either be a boolean (true or false), or a number between 1 to 5. When set to true,
                    this mode will double the cache usage, and double the single thread performance. It will 
 *                  consume much less power (as less cores are working), but will max out at around 80-85% of 
 *                  the maximum performance. When set to a number N greater than 1, this mode will increase the
 *                  cache usage and single thread performance by N times.
 *
 * no_prefetch -    Some sytems can gain up to extra 5% here, but sometimes it will have no difference or make
 *                  things slower.
 *
 * affine_to_cpu -  This can be either false (no affinity), or the CPU core number. Note that on hyperthreading 
 *                  systems it is better to assign threads to physical cores. On Windows this usually means selecting 
 *                  even or odd numbered cpu numbers. For Linux it will be usually the lower CPU numbers, so for a 4 
 *                  physical core CPU you should select cpu numbers 0-3.
 *
 * On the first run the miner will look at your system and suggest a basic configuration that will work,
 * you can try to tweak it from there to get the best performance.
 * 
 * A filled out configuration should look like this:
 * "cpu_threads_conf" :
 * [ 
 *      { "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
 *      { "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
 * ],
 */

"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : false },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : false },
],
````
First lets set our cores/ threads. This is the beginning of your CPU setup, everything else will improve on that as the base.
Think about how much of your CPU you want to mine with,(i.e 50%, 75%, 100%). 

Sometimes during this process its good to jump over to your CPU manufacture page, or a spec's page and find your core/ thread count. 

( example CPU, i5-4690k 4 core NO threading/ threads )

So you want 50% of your CPU to be used? 
1. you want to still use your computer for light work/ browsing
2. you dont have good cooling to run 100%

Below is what your config will look like. Two cores are being used. - ( example hash rate - ~1.8khs )

No tweaks on this so far, this is basically the config the miner creates as a "good to start" config. 
````
"cpu_threads_conf" :
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
],
````
Below is a config for 75% CPU useage. (just one more core being used since its a 4 core) - ( example hash rate - ~2.2khs )
````
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 2 },
],
````
Below is a config for 100% CPU useage. ( All cores being used of a 4 core ) - ( example hash rate - ~3khs )
````
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
````
For CPU's with Threading, or using threads. You add another line like you would for a CPU core, the affine_to_cpu # is set a certain way for that style CPU, please see the config notes on that ( odd/even etc ) ****

Below is a config for 100% CPU useage. Next we will change the "Low_power_mode". 
My impression of this setting is that it passes the data through the cpu twice, three, four, five time ( depending on setting ). increasing speed.
FOR TURTLE (CN/Pico). "true" or "2" seems to be the sweet spot( for most CPU's with enough cache ). No increase has been seen using "3", "4" or "5"
( NOTE: true, essentially = 2. They would be the same setting ) ( example hash rate - ~5.2khs, ~1.1kh per core )
````
[
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
````
TIP, Change only a few cores to low_power_mode : 2 ( or true ). Run the miner and see the performance ( Press H to see hashrate, while in miner window ) difference from the cores you did NOT change. Just to verify you are seeing an increase in performance ( OR NOT )
````
[
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 0 },
	{ "low_power_mode" : false, "no_prefetch" : true, "affine_to_cpu" : 1 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 2 },
	{ "low_power_mode" : 2, "no_prefetch" : true, "affine_to_cpu" : 3 },
],
````
## Large Page support ##

Occasionally ( actually more than likely ) you will see an error when you start XmrStak that says something about " MEMORY ALLOC FAILURE : "

This is normal, and most of the time you can do one thing and get it to go away. 
(https://docs.microsoft.com/en-us/windows/win32/memory/large-page-support ) windows 10, example. 
Each operating system has a different way of setting it. so check your system and search "Large page support XXXXX" and you should find how to do it.

This setting is NOT necessary, but can prove to be better performing. So do try and enable it

## OS tweaks and tips ##

Linux has been known to perform slightly better than the other OS versions of xmrstak

## GPU Tips and Tweaks for XmrStak ##

XmrStak is an "All in one" miner, meaning it will run ALL ( "mineable" ) hardware on your machine under ONE miner ( GPU, CPU )
When you first run XmrStak without modifying anything, the miner will set base "settings" in all these "config" files. It will also mine with all hardware available. 

Unless you specify it NOT too. Each config file ( CPU.txt, AMD.txt, Nvidia.txt ) can be set to NOT mine with that hardware. 
examples are below, of HOW to EXCLUDE hardware. So If you want to mine with CPU ONLY, "NULL" the AMD.txt or Nvidia.txt "gpu_threads_conf" section. If you want to mine your GPU(s) only, "NULL" the CPU.txt "cpu_threads_conf" section.
````
"cpu_threads_conf" :
[
NULL
],
````
( if you want to mine with CPU only, you would "NULL" the "gpu_thread_conf" section of of the AMD.txt or Nvidia.txt config )

When looking at the config files for the GPU(s) you will see a few things that are important.

"index" - this is the GPU's address that the miner saw ( starts at 0 and increments up )

"intensity" - means the number of threads used to mine. The maximum intensity is GPU_MEMORY_MB / 2 - 128, however for cards with 4GB and more, the optimum is likely to be lower than that. 

"worksize" - is the number of threads working together to increase the miner performance. In the most cases a worksize of 16 or 8 is optimal.

There are more settings for GPU's that you can get into, we wont get into all that here. Always read up on the miner Github page any features and options you can choose, to try and squeeze any extra hash. WARNING: this is time consuming and can become neverending. Most settings are set close to SAFE and STABLE when the miner first runs. SO if you decide to change anything, make a copy of your original as a backup. 


Here is an exmaple of what an AMD.txt config file might look like for 1 gpu ( 1 thread performance )
````
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
````
Here is an example of what an AMD.txt config file might look like for 1 gpu ( 2 threads performance )
AMD has seen improvement with 2 threads per gpu. Note the "index" :0 is the same per entry.
````
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
````
If you had multiple GPU (2), 2 threads, it would look like this ( again Note the "index" :0 and "index" :1 )
````
"GPU_threads_conf" :
[
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 0, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 1, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
    { "index" : 1, "intensity" : 1000, "worksize" : 8, "affine_to_cpu" : false,
      "strided_index" : true, "mem_chunk" : 2, "unroll" : 8, "comp_mode" : true,
      "interleave" : 40
    },
],
````
## GPU tweaking ## ( Over Clocking and Bios mods ) can get very involved, and complicated for someone not familiar with the process.

Most of the time a GPU will hash straight out of the box, but it wont be "the optimal" or the "best" performance. it will be the Stable, and "always works" setup.

This works for some, and for others not so much. There are a few issues that come up with changing Overclocks and Bios changes.

Over Clocking - can lead to stability issues, and lose in performance. it can also lead to BETTER performance
Undervolting - can lead to stability issues, and lose in performance. it can also lead to COOLER temps and LOWER power use

### ONLY RECOMMENDED FOR ADVANCED USERS ###

BIOS mod - can lead to bad hashresults, black screens, and bricked cards. It can also lead to BETTER performance ( ontop of above )
There are repositorys on the web of BIOS's both stock and modified for a lot of algo's. If one is not avaialable for Turtle/CNpico you can use others that are similar, but its trial and error at that point. which can lead to problems. A Ethereum bios, from ANORAK works. BUT like stated above, things can go wrong.

An example of this an AMD 580 8gb GPU

stock BIOS - it hashes about 3.5-5khs
MODDED BIOS ( ETH bios ) - can acheive up to 9khs

Most of the time you need to set your Over Clock profile also to achieve these. for this example the "OC profile" would be set in MSI afterburner ( or AMD wattman whatever you choose ). 

core clk=1150 mem clk=2150 core Mv 950. or in MSI afterburner -160 power. 
( the "negative" power is the "undervolting" this will drop tempuratures of the GPU and fan speeds and OVERALL power consumption of the card )

These settings on this example GPU yield 62c and ~30% fan speeds on the GPU @8.2khs

## NOTES ##

The miner will need to run for a few minutes to get stable and consistent. Your Hashrate could fluctuate during that time, you could see some cores/GPU(s) NOT hashing at all. Give it a few minutes for the miner to stabilize before changing or reverting config settings.

Edit config.txt and set verbose_level to 4 and h_print_time to 30 and start the miner. You will see hash report each 30 seconds. just like if you hit "h" on your keyboard, every 30 sec.

