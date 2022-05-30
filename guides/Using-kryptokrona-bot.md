---
title: Using KryptokronaBOT
---
## Automatic Wallet
You will automatically recieve an wallet and SEKR adress from our bot funded with 1000 XKR once you join our discord, but if you would like you can also register your own adress to receive tips.
Open a private convo with the bot and typ `!help` to see available commands.


## Registering your Wallet

Go to the `#bots` channel in the [Discord server](http://chat.kryptokrona.se), and type `!registerwallet SEKR...`, and replace `SEKR...` with your wallet address.
For example, you would type-
```
!registerwallet SEKRv3pFrFm2yk4cYNtKf5fxV1b594tNrZfEV2CYWJsTSqr9BWoWMrUNpQaeD9StrzQrxpRQKPCdd1FfvT6D6dAg4pY6iB7sqs
```

## Checking your Balance & Depositing XKR

To check your balance simply typ `!balance`in a private conversation with the bot.
You can deposit XKR to your tip wallet by typing `!balance` and copying that `SEKR..`adress to send funds to it.


## Tipping People
To tip someone, type `!tip @person 12345`.

Replace `12345` with how much you want to tip the person.  
Replace `@person` with whom you want to tip it to.

For example, `!tip 1 @Ulviux#5262` will tip the user called "Ulviux"  1 XKR.

* The minimum you can send is 0.01 XKR, and the bot will take an extra 0.1 XKR on top of what you tipped to account for fees  
So if you tipped 1 XKR, 1.1 XKR will be pulled from your account so that the full 1 XKR reaches the recipient*


### Where Do These Tips Go?

When you tip someone, the desired amount plus 0.1 XKR is pulled from your wallet balance and sent to the recipient's registered wallet (if he has not registered a wallet, he cannot receive tips).

When you get tipped, the sender sends the desired amount plus 0.1 XKR, pulled from his wallet balance, directly to your registered wallet (if you haven't registered a wallet, you can't receive tips).  
It also reacts to the message on which the person was tipped (`!tip 1 @Ulviux#5262`) with the moneywings emoji.

It *does not* send the XKR to your balance. It sends it *directly* to your **wallet**.  