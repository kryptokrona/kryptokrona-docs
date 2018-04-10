# Linux Guide

Native binaries may be available for your distribution's package manager. 

If no binaries are available, or you prefer to compile, follow these instructions-

## Ubuntu 16.04

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
