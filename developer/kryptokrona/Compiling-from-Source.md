---
title: Compiling from Source
---

# Compiling from Source

The instructions here cover common platforms for compiling from source.

We offer binaries of the latest releases here: https://github.com/kryptokrona/kryptokrona/releases

If you would like to compile yourself, read on.

## Prerequisites

You will need the following packages: boost, cmake (3.8 or higher), make, and git.

You will also need either GCC/G++, or Clang.

If you are using GCC, you will need GCC-11.0 or higher.

If you are using Clang, you will need Clang 6.0 or higher. You will also need libstdc++\-6.0 or higher.

## Ubuntu

### Build using GCC

If you are using Ubuntu 22.04 LTS GCC11 and C++11 now comes as default and no need to install this.

- `sudo add-apt-repository ppa:ubuntu-toolchain-r/test -y`
- `sudo apt-get update`
- `sudo apt-get install aptitude python3-pip -y`
- `sudo aptitude install -y build-essential g++-11 gcc-11 git libboost-all-dev`
- `sudo pip3 install cmake`
- `export CC=gcc-11`
- `export CXX=g++-11`
- `git clone -b master --single-branch https://github.com/kryptokrona/kryptokrona`
- `cd kryptokrona`
- `mkdir build`
- `cd build`
- `cmake ..`
- `make`

The binaries will be in the `src` folder when you are complete.

- `cd src`
- `./kryptokrona --version`

### Build using Clang

- `sudo add-apt-repository ppa:ubuntu-toolchain-r/test -y`
- `wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | sudo apt-key add -`

You need to modify the below command for your version of ubuntu - see https://apt.llvm.org/

- Ubuntu 14.04 (Trusty)

* `sudo add-apt-repository "deb https://apt.llvm.org/trusty/ llvm-toolchain-trusty 6.0 main"`

- Ubuntu 16.04 (Xenial)

* `sudo add-apt-repository "deb https://apt.llvm.org/xenial/ llvm-toolchain-xenial 6.0 main"`

- Ubuntu 18.04 (Bionic)

* `sudo add-apt-repository "deb https://apt.llvm.org/bionic/ llvm-toolchain-bionic 6.0 main"`

* `sudo apt-get update`
* `sudo apt-get install aptitude -y`
* `sudo aptitude install -y -o Aptitude::ProblemResolver::SolutionCost='100*canceled-actions,200*removals' build-essential clang-6.0 libstdc++-7-dev git libboost-all-dev python-pip`
* `sudo pip install cmake`
* `export CC=clang-6.0`
* `export CXX=clang++-6.0`
* `git clone -b master --single-branch https://github.com/kryptokrona/kryptokrona`
* `cd kryptokrona`
* `mkdir build`
* `cd build`
* `cmake ..`
* `make`

The binaries will be in the `src` folder when you are complete.

- `cd src`
- `./kryptokrona --version`

## Generic Linux

### Build

- `git clone -b master --single-branch https://github.com/kryptokrona/kryptokrona`
- `cd turtlecoin`
- `mkdir build`
- `cd build`
- `cmake ..`
- `make`

The binaries will be in the `src` folder when you are complete.

- `cd src`
- `./kryptokrona --version`

## OSX/Apple

### Prerequisites

- Install XCode and Developer Tools.

### Build using GCC

If using M1 chip, switch gcc@8 to gcc@11 when installing through brew.

- `which brew || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- `brew install --force cmake boost llvm gcc@8`
- `export CC=gcc-8`
- `export CXX=g++-8`
- `git clone -b master --single-branch https://github.com/kryptokrona/kryptokrona`
- `cd kryptokrona`
- `mkdir build`
- `cd build`
- `cmake ..`
- `make`

The binaries will be in the `src` folder when you are complete.

- `cd src`
- `./kryptokrona --version`

### Build using Clang

- `which brew || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- `brew install --force cmake boost llvm`
- `export CC=/usr/local/opt/llvm/bin/clang`
- `export CXX=/usr/local/opt/llvm/bin/clang++`
- `git clone -b master --single-branch https://github.com/kryptokrona/kryptokrona`
- `cd kryptokrona`
- `mkdir build`
- `cd build`
- `cmake ..`
- `make`

The binaries will be in the `src` folder when you are complete.

- `cd src`
- `./kryptokrona --version`

## Windows

### Prerequisites

- Install [Visual Studio 2017 Community Edition](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15&page=inlineinstall)
- When installing Visual Studio, it is **required** that you install **Desktop development with C++**
- Install the latest version of [Boost](https://bintray.com/boostorg/release/download_file?file_path=1.68.0%2Fbinaries%2Fboost_1_68_0-msvc-14.1-64.exe) - Currently Boost 1.68.

### Build using Visual C++

- From the start menu, open 'x64 Native Tools Command Prompt for vs2017'.
- `cd <your_kryptokrona_directory>`
- `mkdir build`
- `cd build`
- `set PATH="C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin";%PATH%`
- `cmake -G "Visual Studio 15 2017 Win64" .. -DBOOST_ROOT=C:/local/boost_1_68_0`

If you have errors on this step about not being able to find the following static libraries, you may need to update your cmake. Open 'Visual Studio Installer' and click 'Update'.

- `MSBuild kryptokrona.sln /p:Configuration=Release /m`

The binaries will be in the `src/Release` folder when you are complete.

- `cd src`
- `cd Release`
- `kryptokrona.exe --version`

## Raspberry Pi 3 B+ (AARCH64/ARM64)

The following images are known to work. Your operation system image **MUST** be 64 bit.

### Known working images

- https://github.com/Crazyhead90/pi64/releases
- https://fedoraproject.org/wiki/Architectures/ARM/Raspberry_Pi#aarch64_supported_images_for_Raspberry_Pi_3
- https://archlinuxarm.org/platforms/armv8/broadcom/raspberry-pi-3

Once you have a 64 bit image installed, setup proceeds the same as any Linux distribution. Ensure you have at least 2GB of ram, or the build is likely to fail. You may need to setup swap space.

## CentOS 7

kryptokrona build on CENTOS 7 or RHEL 7 with DEVTOOLS 7

```
$ sudo yum groupinstall 'Development Tools'
```
OR
```
$ sudo yum groups mark install 'Development Tools'
$ sudo yum update 
```

### Install devtools 7

```
# 1. Install a package with repository for your system:
# On CentOS, install package centos-release-scl available in CentOS repository:
$ sudo yum install centos-release-scl # On RHEL, enable RHSCL repository for you system:
$ sudo yum-config-manager --enable rhel-server-rhscl-7-rpms # 2. Install the collection:
$ sudo yum install devtoolset-7# 3. Start using software collections:
$ scl enable devtoolset-7 bash
```

### Requirements

```
$ sudo yum install git wget automake make cmake cmake3  -y

$ sudo yum install gflags-devel snappy-devel zlib-devel bzip2-devel gcc gcc-c++ libstdc++-devel libstdc++-static -y
$ sudo yum install python-devel -y
```

### Install boost 1.62 or above version 
Version 1.62 successfully build with gcc 7  

```
$ wget https://sourceforge.net/projects/boost/files/boost/1.62.0/boost_1_62_0.tar.gz
$ tar xvf boost_1_62_0.tar.gz
$ cd boost_1_62_0
$ scl enable devtoolset-7 bash
$ ./bootstrap.sh
$ ./b2
```

### Get kryptokrona source and Compile
```
$ cd ..

$ git clone https://github.com/kryptokrona/kryptokrona.git
$ cd kryptokrona
$ mkdir build && cd build
$ scl enable devtoolset-7 bash
$ export CXXFLAGS="-std=gnu++11"
$ cmake3 .. -DBOOST_ROOT=~/boost_1_62_0
$ make
``` 

polar-it: Is faster than the equivalent version on Ubuntu 16.04
