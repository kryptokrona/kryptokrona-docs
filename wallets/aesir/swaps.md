# Atomic Swaps (BTC ⇄ XKR)

Aesir can swap directly between **Bitcoin** and **XKR** using **atomic swaps** — a trustless, peer‑to‑peer exchange where neither side can run off with the other's money. No exchange account, no custodian, no wrapped or bridged tokens, no KYC. Just two wallets and the two blockchains.

> 📷 **Screenshot:** The Swap tab — maker list on one side, amount entry and quote on the other. _(add to `assets/aesir/swap-overview.png`)_

## Why atomic swaps?

* **Trustless.** The swap either completes for both sides or refunds to both sides. At no point can the counterparty take your coins and disappear.
* **Non‑custodial.** Your keys never leave your machine. You're not depositing to an exchange or a bridge.
* **No wrapped tokens.** You send and receive *real* on‑chain BTC and *real* XKR — not an IOU.
* **Private and permissionless.** No account, no sign‑up, no gatekeeper. Discovery and the swap itself happen peer‑to‑peer.
* **Direct BTC ⇄ XKR.** This is the only way to move between Bitcoin and XKR without going through a third party.

## How it works (in plain terms)

An atomic swap ties the two on‑chain payments together with cryptography so they can't happen independently:

1. **Agree.** The two wallets find each other, agree on a price and amount, and exchange the cryptographic commitments for the swap.
2. **Lock BTC.** The **taker** locks their Bitcoin into a special 2‑of‑2 output that can only be spent with cooperation from both sides.
3. **Lock XKR.** Seeing the Bitcoin locked, the **maker** locks the agreed XKR.
4. **Redeem.** The taker takes the XKR; the act of doing so cryptographically reveals the secret the maker needs to take the Bitcoin. Both sides get paid.
5. **Refund (safety net).** If either side stalls, on‑chain **timelocks** let the other reclaim their own coins. Funds are never stuck permanently — worst case you wait for a timelock and get a refund.

You don't have to manage any of this by hand — Aesir walks each swap through these steps and shows you a live timeline.

> Under the hood this uses the well‑studied Bitcoin↔Monero atomic‑swap design (adaptor signatures + a shared secret), adapted for Kryptokrona. All communication between the two wallets is end‑to‑end encrypted.

## The two roles

Every swap has a **taker** and a **maker**:

* **Taker** — you have **BTC** and want **XKR**. You browse the available makers, pick one, and start a swap. You lock BTC, you receive XKR.
* **Maker** — you have **XKR** and want **BTC**. You run a small market‑maker that advertises a price; takers come to you. You lock XKR, you receive BTC.

Anyone can be either. Most people will use the **taker** side to buy XKR with Bitcoin.

---

## Using it — Taker (buy XKR with BTC)

**You need:** some Bitcoin in Aesir's BTC wallet (found under **Receive → Bitcoin** — the address is derived from your seed). Start with a **small amount** for your first swap.

1. Open the **Swap** tab.
2. Aesir lists the **makers** currently online, each with its price. Pick one.
3. Enter the **amount** of XKR you want (or the BTC you want to spend). Aesir shows the **rate**, the **fiat value**, and the estimated **Bitcoin network fee** before you commit.
4. Press **Swap** and confirm.
5. Follow the **timeline**: your BTC lock is broadcast and waits for confirmation, the maker locks XKR, and then the swap redeems — the XKR lands in your wallet.

> 📷 **Screenshot:** Confirm‑swap dialog (rate, amount, network fee, fiat value). _(add to `assets/aesir/swap-confirm.png`)_

> 📷 **Screenshot:** The swap timeline in progress (BTC locked → waiting for confirmation → XKR locked → redeemed). _(add to `assets/aesir/swap-timeline.png`)_

**Tips**

* Keep the app open until the swap finishes — atomic swaps are interactive.
* You can open the BTC/XKR transactions in a block explorer straight from the timeline.
* If a swap stalls, you can cancel; your locked BTC is refunded once the on‑chain refund timelock expires (this can take a while, but the funds are safe).

---

## The market‑maker explorer

Beyond the plain maker list, Aesir has a **market‑maker explorer** — a live, order‑book style view of every maker currently advertising on the peer‑to‑peer board. Instead of a flat list of names, it plots the whole market so you can size up liquidity before you commit.

* **See the whole book at a glance.** Every online maker is shown with its **price** (sats per XKR) and how much XKR it's offering, sorted from the cheapest ask upward.
* **Depth chart.** The offers are drawn as a **cumulative sell book**: the curve shows how much XKR you could buy as you walk up the price. A steep, deep curve near the current price means plenty of cheap liquidity; a thin one means you'll pay more to fill a larger amount.
* **Find the best deal.** Because makers are ranked by price, the explorer makes it obvious which maker gives you the most XKR for your Bitcoin, and how far the price moves if you want to swap a bigger amount than the cheapest maker can cover.
* **Live.** As makers come online, go offline, or change their price, the explorer updates — it's a real‑time picture of the market, with no exchange and no central order book behind it.

Switch between the simple **list** and the **book / explorer** view from the Swap tab. Pick a maker straight from the explorer to start a swap.

> 📷 **Screenshot:** The market‑maker explorer — makers ranked by price with the cumulative sell‑book depth chart. _(add to `assets/aesir/maker-explorer.png`)_

---

## Using it — Maker (sell XKR for BTC)

Running as a maker lets you earn Bitcoin by providing XKR liquidity to takers.

**You need:** **XKR** in your wallet to sell (this is your inventory — each swap locks some of it). The Bitcoin you receive is paid to your wallet's BTC address.

1. Open the **Swap** tab and switch to / enable **market‑making**.
2. Set your **price** (sats per XKR). You can match the market with a markup, or set a fixed price.
3. Aesir starts the maker engine and **advertises you on the peer‑to‑peer board**, so takers can discover and reach you — even behind NAT, with no server to run.
4. When a taker starts a swap, Aesir handles the whole exchange automatically. Your XKR is locked, and once the swap completes you receive BTC.

> 📷 **Screenshot:** Maker / market‑making controls (price, spread, status). _(add to `assets/aesir/maker-controls.png`)_

**Good to know**

* A maker can serve **several swaps at once** — it's not locked to one at a time. The real limit is your **available (unlocked) XKR balance**: each in‑flight swap locks some XKR, so once your unlocked balance can't cover another swap, new requests are declined with a "balance too low" message until earlier swaps finish or you top up.
* Your listing stays visible while you're swapping, so takers can still find you.
* Keep the app running to stay online for takers.

---

## Discovery: how wallets find each other

Aesir uses a **peer‑to‑peer market board** (built on a distributed hash table) for makers to advertise and takers to discover them. There's **no central server** and no account — the board handles NAT traversal so wallets can connect directly, and every swap message is end‑to‑end encrypted on top of that.

## Safety & refunds

* Atomic swaps are **all‑or‑nothing**. A completed swap pays both sides; a failed one refunds both sides.
* If the other party goes offline mid‑swap after BTC is locked, you reclaim your Bitcoin via the **refund timelock**. This is automatic once the timelock matures — you may just have to wait.
* Because everything derives from your **wallet seed**, reinstalling the app or moving to a new machine restores your XKR *and* the swap BTC wallet from the same seed.

## Troubleshooting

* **"Swap failed to get off the ground."** The swap couldn't complete setup. Common causes: the maker you picked went offline, the maker's **unlocked balance is too low** for your amount, or you don't have enough **BTC** to cover the lock plus network fee. Try a different maker or a smaller amount.
* **No makers in the list.** Nobody is market‑making right now. You can wait, or run the maker side yourself.
* **BTC balance shows 0.** Fund the wallet's Bitcoin address first (**Receive → Bitcoin**), and let it sync.

> ⚠️ Release builds of Aesir swap on **Bitcoin mainnet with real BTC**. Always test with a small amount first.
