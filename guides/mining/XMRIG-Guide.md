# XMRig Guide for TurtleCoin

XMRig uses separate miners for CPU and GPU, you need to dowload a cpu and gpu miner separately and run two separate instances in your computer.

## Downloading and Installing for Windows

XMRig has separate miners for CPU and GPU. You can download them from here:

* [XMRig CPU Miner](https://github.com/xmrig/xmrig/releases)
* [XMRig GPU Nvidia Miner](https://github.com/xmrig/xmrig-nvidia/releases)
* [XMRig GPU AMD Miner](https://github.com/xmrig/xmrig-amd/releases)

**Note:** You will need to download and run two separate instances if you want to mine with your GPU and CPU at the same time.

## Downloading and Installing for Mac

Needs to be compiled. Instructions [here](https://github.com/xmrig/xmrig/wiki/OS-X-Build)

## XMRig Setup and Configuration

### CPU XMRig Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesnt delete the files)
2. Open the `config.json` file with notepad
3. Find and change the following lines:
* `"algo: "cryptonight-lite"`
* `"url: "your pool address goes here"`
* `"user: "your wallet goes here"`
* `"variant": 1`

### GPU XMRig Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesnt delete the files)
2. Open the `config.json` file with notepad
3. Find and change the following lines:
* `"algo: "cryptonight-lite"`
* `"url: "your pool address goes here"`
* `"user: "your wallet goes here"`
* `"variant": 1`

All Done!

**Remember:** if you want to mine with both your CPU and your GPU you must have both programs open at the same time!
