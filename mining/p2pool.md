---
description: >-
  Mine Kryptokrona on the decentralized p2pool — no pool operator, paid straight
  to your wallet.
---

# p2pool

<figure><img src="../.gitbook/assets/p2pool.png" alt="" width="375"><figcaption></figcaption></figure>



> ⚠️ **Alpha software.** Kryptokrona p2pool is brand new and still being tested. Great for trying out and helping the network — just don't rely on it for anything critical yet.

## What is p2pool?

**p2pool is a mining pool with no operator.** Instead of connecting to someone else's pool server, you run a tiny pool of your own on your computer, next to your miner. All the p2pool users around the world are linked together into one shared network (a "sidechain"), so you get the **steady, regular payouts of a big pool** — but with none of the downsides:

* 🪙 **You get paid directly to your own wallet**, automatically, every time the pool finds a block. There are no withdrawals, no minimum payout, and nobody ever holds your coins.
* 🔒 **No trust required.** There's no operator who could disappear, get hacked, or run off with the rewards.
* 🧾 **No registration, no accounts, no website login.**
* 💸 **Basically zero fees.**

The trade-off is that you run one small extra program (p2pool) yourself. This guide walks you through it step by step.

### p2pool vs. a normal pool

|                       | Normal pool                           | p2pool                                  |
| --------------------- | ------------------------------------- | --------------------------------------- |
| Who holds your coins? | The pool operator, until you withdraw | **Nobody — paid straight to you**       |
| Payout                | Manual/minimum withdrawal             | **Automatic, on every block**           |
| Fee                   | Usually 0.1%–2%                       | **\~0%**                                |
| Trust                 | You trust the operator                | **Trustless**                           |
| Setup                 | Point miner at a URL                  | Run a small program + point miner at it |

## What you'll need

1. A **Kryptokrona wallet address** (starts with `SEKR…`).
2. A **Kryptokrona node** to connect to (your own, or a public one — see below).
3. The **p2pool** program.
4. A **miner** — we recommend [XMRig](xmrig-guide.md).

Don't have a wallet yet? Follow [Making a Kryptokrona Wallet](../guides/wallets/Making-a-Wallet.md) and **save your mnemonic seed** — that's the only way to recover your coins.

## Step-by-step guide

### 1. Get a Kryptokrona node

p2pool needs to talk to a Kryptokrona node (the `kryptokronad` daemon). You have two options:

* **Run your own node** (recommended — most reliable, and the whole point of decentralization). See [Deploy a Public Node](../node/run-a-public-node.md) or [Deploy a node with Docker](../node/deploy-your-own-node.md). Once it's synced, it listens on port `11898`.
* **Use a public node** (easiest — nothing to sync). Pick one from [Using Remote Nodes](../guides/wallets/Using-Remote-Nodes.md) and note its address and RPC port. Just replace `127.0.0.1 --rpc-port 11898` in the commands below with the public node's address and port.

### 2. Download p2pool

Grab the file for your operating system from the latest release:

👉 [**github.com/kryptokrona/p2pool/releases**](https://github.com/kryptokrona/p2pool/releases)

| Your system                  | File to download             |
| ---------------------------- | ---------------------------- |
| Windows                      | `p2pool-msys2-gcc.exe`       |
| macOS (Apple Silicon, M1–M4) | `p2pool-macos-aarch64`       |
| macOS (Intel)                | `p2pool-macos`               |
| Linux                        | `p2pool-ubuntu-24.04-gcc-14` |

Put it in its own folder. On macOS/Linux, make it runnable first:

```bash
chmod +x p2pool-*
```

### 3. Start p2pool

Open a terminal (or Command Prompt on Windows) in that folder and run the command below, replacing `YOUR_WALLET_ADDRESS` with your `SEKR…` address:

**Windows:**

```
p2pool-msys2-gcc.exe --host 127.0.0.1 --rpc-port 11898 --wallet YOUR_WALLET_ADDRESS --stratum 0.0.0.0:3333 --p2p 0.0.0.0:37889
```

**macOS / Linux:**

```bash
./p2pool-* --host 127.0.0.1 --rpc-port 11898 --wallet YOUR_WALLET_ADDRESS --stratum 0.0.0.0:3333 --p2p 0.0.0.0:37889
```

When you see **`SideChain SYNCHRONIZED`** and it starts logging `ping is … ms`, p2pool is connected and ready. Leave this window open — it needs to keep running while you mine.

> 💡 **Small miner (a laptop or single PC)?** Add `--mini` (or `--nano` for very low hashrate) to the command. These are lighter sidechains that find shares more often, so your payouts are smoother.

### 4. Point your miner at p2pool

Mining to p2pool is just like [mining with XMRig](xmrig-guide.md) — the **only difference is the pool address**. Instead of a pool URL, point XMRig at your own p2pool:

* **URL / pool:** `127.0.0.1:3333`
* **Wallet / user:** anything you like (e.g. `x`) — it's only a label. **p2pool pays out to the address you set in step 3, not the one in your miner.**
* **TLS/SSL:** off

If you're reusing an existing Kryptokrona XMRig `config.json`, just change the `"url"` to `"127.0.0.1:3333"` and start the miner as usual.

### 5. That's it — you're mining! 🎉

Keep **both** the p2pool window and your miner running. As the network finds blocks, your share of the reward lands **directly in your wallet** — no action needed. You can watch p2pool's window to see shares being found.

## Tips

* **Keep it running.** You only earn while both p2pool and your miner are up.
* **Open port `37889`** on your router (forward it to your PC) for better connectivity with other p2pool nodes. It works without this, but connects to more peers with it.
* **One p2pool per computer.** Point all of a machine's miners at that one p2pool.

## Need help?

Something not working? Come ask in our [Discord](https://chat.kryptokrona.se/) — the community is happy to help.

Happy (decentralized) mining! 🌀
