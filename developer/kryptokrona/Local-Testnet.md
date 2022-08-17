---
title: Local Testnet
---

Setting up a testnet using just one PC is very easy, and lets you test things out with very minimal setup.

# Setup

## Setup with Docker

### Change config

Before we start we just need to change slight a bit on the `cryptonote_config.h` header file with some constants so we don't use our main net to test on.

Open up `src/config/cryptonote_config.h`

Then we need to change the constants **P2P_DEFAULT_PORT** and **RPC_DEFAULT_PORT** to:

```cpp
const int      P2P_DEFAULT_PORT                              =  11898;
const int      RPC_DEFAULT_PORT                              =  11899;
```

And put some different letter or number in one of these **CRYPTONOTE_NETWORK** uuids:

```cpp
const static   boost::uuids::uuid CRYPTONOTE_NETWORK         =
{
    {  0xf1, 0x4c, 0xb8, 0xc8, 0xb2, 0x56, 0x45, 0x2e, 0xee, 0xf0, 0xb4, 0x99, 0xab, 0x71, 0x6c, 0xcc  }
};
```

And also we need to comment out seed nodes:

```cpp
const char* const SEED_NODES[] = {
  // "68.183.214.93:11897",//pool1
  // "5.9.250.93:11898"//techy
};
```

Now we are good to go to start with Docker. So if we want to setup our own testnet locally on our computer we will need to install Docker on our computer.

### Install Docker 

On Windows or Mac it's enough to install Docker Desktop and we will have everything we need in order to setup. For GNU/Linux however there is a slight different process. We are going through the steps for doing it on a Ubuntu distribution, it should work on all Debian derived distributions. Read below.

Update our headers:

```bash
sudo apt-get update
```

Installing neccessary dependencies for Docker:

```bash
sudo apt-get -y install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Setting up the keyring:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Updating our sources.list for be able to download Docker:

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Installing Docker and Docker Compose:

```bash
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose
```

### Start the orchestration of Docker containers

So now we have everything in place in order for us to build and orchestrate up a local testnet. We do not need to install all dependencies mentioned before this section of Docker on your computer. When we start the process of setting up the testnet we will build a Docker Image that installs everything for us automatically.

So to start from scratch we will use the shell script `setup-testnet.sh` but before that we must make sure that all our shell scripts that we need are executable on our system. To make the shell scripts executable:

```bash
sudo chmod +x setup-testnet.sh \
              remove-testnet.sh \
              start-testnet.sh \
              teardown-testnet.sh
```

To start:

- `./setup-testnet.sh`

So now the first time when starting the script it will take a while to compile and link all the files (around 15-20 minutes dependening on how powerful computer you have). So when it's done you will see a lot of output of the Daemons starting on three nodes. The miner do not have any output on the terminal.

### Stop all Docker containers

So all of these containers running will take up some memory and CPU usage on your system so it could be wise to stop these when not using them. To do that just run the shell script:

- `./teardown-testnet.sh`

This makes sure that we still have the image saved locally so we don't need to build it again when we will start it.

### Start all Docker containers again

Instead of using `setup-testnet.sh` file we will use the file `start-testnet.sh`:

- `./start-testnet.sh`

The difference here is that we will not build the image again and thus has to wait a while. Now this will only take seconds. And now we have our testnet up again!

### Removing all data

When we want to do a full cleanup on our system with Docker we can start the script `remove-testnet.sh`:

- `./remove-testnet.sh`

Now we will remove networks, volumes, images and containers existing on our system. If you after removing everything want to start again. Just use the file `setup-testnet.sh` again.

Check also out the article made by Marcus Cvjeticanin here: https://medium.com/coinsbench/setup-a-testnet-with-kryptokrona-blockchain-41b5f9ffd86

## Setup without Docker

### Disabling outside peers

First, we need to disable incoming peers, so they don't interfere with our testnet. This step is not mandatory, but it's likely you'll get other daemons connected to you (or you will connect to the seed nodes), messing up your testnet.

You can block the p2p port of your daemon with `ufw`, or another firewall program.

We need to apply this to each daemon p2p port we launch.

```
sufo ufw enable
sudo ufw deny 10000;
sudo ufw deny 10001;
sudo ufw deny 10002;
```

Once you're done, and want to re-enable, either disable ufw, or run

```
sudo ufw disable
sudo ufw allow 10000;
sudo ufw allow 10001;
sudo ufw allow 10002;
```

### Clearing checkpoints

If you're wanting to mine any blocks, you'll want to empty the checkpoints file. Open up `src/config/CryptoNoteCheckpoints`, and empty the checkpoints there. Recompile.

### Data directories

First, we need three new folders to be the location for the blockchains for each daemon.

In this example, I'm simply going to use the folder `a`, `b`, and `c`.

On linux: `mkdir a b c`, to make the folders.

### Running

### Launching daemons

Next we need to launch three daemons. Each need to have a different p2p port, different rpc port, and different data directory, to not conflict.

In the below commands, replace `kryptokrona` with the name of your daemon executable, if you are a kryptokrona fork.

**Daemon 1**

```
./kryptokrona --data-dir a --add-exclusive-node 127.0.0.1:10001 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10000 --rpc-bind-port 20000
```

**Daemon 2**

```
./kryptokrona --data-dir b --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10001 --rpc-bind-port 20001
```

**Daemon 3**

```
./kryptokrona --data-dir c --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10001 --p2p-bind-port 10002 --rpc-bind-port 20002
```

And you're done! The three daemons should connect to each other.

Start up a miner, and test stuff out. Remember to use the rpc port you started one of your daemons on with your wallet/miner.
