---
description: Learn how to start mining on your mac computer, it's very fast and easy!
icon: apple
---

# Mining on macOS

.. So you've got a Mac? Well, good news, the new Apple Silicon chips are very efficient to mine XKR on! You can expect at least 1kh/s on some of the newer Apple laptops, at a very low wattage.

Below you can follow a concise step-by-step guide on how to start mining!

### 1. Install brew

Homebrew is a terminal app that let's you install terminal applications with ease. They call it "The Missing Package Manager for macOS", which is an apt description. If you haven't installed it yet, do so by opening Terminal.app (command + space, and write terminal to open it) and write the following command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

_Source:_ [_https://brew.sh/_](https://brew.sh/)



### 2. Install xmrig

Then we will use your new brew installation to install the mining software, called xmrig. Simply type the following in the terminal to install it:

```
brew install xmrig
```

When it's finished (usually takes a few minutes), the software is installed and ready to go, but you will need a config so that you're mining the right coin to the right wallet.

### 3. Generate a config-file

You can generate a config on our website: [https://kryptokrona.org/mining](https://kryptokrona.org/mining)

To do so, you will need a wallet first. We recommend using [Aesir wallet](../guides/wallets/Using-Kryptokrona-Wallet.md) to handle your XKR coins. If you want to get started without having to download any additional software, you can also generate a paper wallet at [https://explorer.kryptokrona.se/tools.html](https://explorer.kryptokrona.se/tools.html) and use that address, and then import it to the wallet in the app later. _**Dont forget to save the mnemonic seed, otherwise you won't be able to access the coins!**_

When you've pasted your wallet address into the generator, it should start a download of a _**config.json**_ file that will end up in your downloads folder.

### 4. Start the miner

Now you can simply start mining by typing the following into the terminal:

```
xmrig -c ~/Downloads/config.json
```

<figure><img src="../.gitbook/assets/Screenshot 2024-12-05 at 16.03.11.png" alt=""><figcaption><p>If everything went right, it should look something like this!</p></figcaption></figure>

