# Setting Up a New Wallet

The easiest way to set up a wallet and start *receiving* funds is to use the paper wallet. 
However, you will need to use either a CLI (Command Line Interface), GUI (Graphical User Interface) or Web Wallet if you want to check your balance or send funds to other people.

## Paper Wallet

**Before you get started:** The main purpose of a paperwallet is to quickly create a wallet to start receiving funds. You will not be able to spend or send your funds to other people until you set up a CLI, GUI or Web Wallet.

There are two options for a paper wallet-

1. Go to [this link](https://turtlecoin.lol/wallet) and follow these steps-
   
   - Click on `Generate a Wallet`
   - Mash your keyboard and start entering a bunch of random letters, numbers and signs in the field. Make sure you toggle on Caps Lock repeatedly, and don't go too crazy - otherwise you might end up shutting down your PC!
   - After you're done mashing your keyboard, press `Generate Wallet`
   - The letters and numbers in the green box, starting with `TRTL`, is yout public address. You can share it freely. We recommend [registering it with trtlbot++](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#registering-your-wallet) in the Discord so that you can access it easily.   
   - Save the `Seed Phrase`, the 25 words in the red box, safely. **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to this can access your funds and has complete control over your wallet.
   - Save the `Spend Key` and the `View Key`, the two very long strings of (seemingly) random letters and numbers, safely.  **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to these can access your funds and has complete control over your wallet.
   
2. You can create a paper wallet when completely offline on an air-gapped machine, too. Check [this GitHub repository](https://github.com/turtlecoin/paper-turtle).

To use it, follow these steps:

**Windows**
  - Click on `Clone or Download`
  - Click on `Download ZIP`
  - Extract the `.zip` file to a directory of your choice( Say, `C:/paper`)
  - Open the folder when you unzipped it, (say `C:/paper`) and double click on `index.html`
  - Click on `Generate a Wallet`
  - Mash your keyboard and start entering a bunch of random letters, numbers and signs in the field. Make sure you toggle on Caps Lock repeatedly, and don't go too crazy - otherwise you might end up shutting down your PC!
  - After you're done mashing your keyboard, press `Generate Wallet`
  - The letters and numbers in the green box, starting with `TRTL`, is yout public address. You can share it freely. We recommend [registering it with trtlbot++](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#registering-your-wallet) in the Discord so that you can access it easily.   
  - Save the `Seed Phrase`, the 25 words in the red box, safely. **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to this can access your funds and has complete control over your wallet.
  - Save the `Spend Key` and the `View Key`, the two very long strings of (seemingly) random letters and numbers, safely.  **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to these can access your funds and has complete control over your wallet. 

**Linux**
  - Open the terminal
  - Type, `git clone https://github.com/turtlecoin/paper-turtle.git`and press enter 
  - Then enter `cd paper-turtle`
  - After doing so, enter `index.html`
  - A page should open up in your browser
  - Click on `Generate a Wallet`
  - Mash your keyboard and start entering a bunch of random letters, numbers and signs in the field. Make sure you toggle on Caps Lock repeatedly, and don't go too crazy - otherwise you might end up shutting down your PC!
  - After you're done mashing your keyboard, press `Generate Wallet`
  - The letters and numbers in the green box, starting with `TRTL`, is yout public address. You can share it freely. We recommend [registering it with trtlbot++](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#registering-your-wallet) in the Discord so that you can access it easily.   
  - Save the `Seed Phrase`, the 25 words in the red box, safely. **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to this can access your funds and has complete control over your wallet.
  - Save the `Spend Key` and the `View Key`, the two very long strings of (seemingly) random letters and numbers, safely.  **DO NOT SHARE IT WITH ANYONE**. Anyone who has access to these can access your funds and has complete control over your wallet. 


**Remember:** DO NOT give your `Spend Key`, `View Key` or `Seed Phrase` to anybody.
Also, count and make sure the Seed Phrase you've saved is *25 words, no more, no less.*

## Simple Wallet (A.K.A. CLI Wallet)

Before you get started with Simple Wallet, you should know that it is essentially a DOS program. You have to type the commands into the DOS window, you cannot use your mouse. (Currently, as of 8th of April 2018, this is the most stable wallet) 

This is what the Simplewallet looks like:

![Simplewallet](https://github.com/holytastyguacamole/turtlecoin-wiki/blob/master/images/screenshot_simplewallet.png)

To set up Simple Wallet, simply follow this guide: [Getting Started](https://github.com/turtlecoin/turtlecoin/wiki/Getting-Started)  

## Graphical Wallet (A.K.A GUI Wallet)

If you prefer to use a GUI wallet, there are currently two which are being developed regularly:

### 1. [Xamarin Wallet](https://github.com/turtlecoin/turtle-wallet-xamarin)

You can download the latest version of Xamarin Wallet **[here](https://github.com/turtlecoin/turtle-wallet-xamarin/releases)**.

This is what the Xamarin Wallet looks like:

![Xamarin Wallet](https://github.com/holytastyguacamole/turtlecoin-wiki/blob/master/images/screenshot_xamarin.png)

**New Users:** The first time you start and create a wallet, it will take a little while for the software to sync with the blockchain. Please be patient.

### 2. [Nest Wallet](https://github.com/turtlecoin/turtle-wallet-go)

You can download the latest version of Nest Wallet **[here](https://github.com/turtlecoin/turtle-wallet-go/releases)**.

This is what Nest Wallet looks like:

![Nest Wallet](https://github.com/holytastyguacamole/turtlecoin-wiki/blob/master/images/screenshot_nest.png)

**New Users:** The first time you start and create a wallet, it will take a little while for the software to sync with the blockchain. Please be patient.

## Web Wallet 

Our Web Wallet is still being developed and it is in the Beta testing stage. If you are interested in joining the beta test, jump into our Discord channel and see if you can score an invite!

## Testing your New Wallet!

If you have created a new wallet and you are itching to see how it works, you can either jump on our Discord channel and say hello to the community (chances are someone will tip you some coins as a welcome!).

Otherwise, you can use our free [Turtle Faucet](https://faucet.trtl.me/). Simply key in your wallet address and start claiming some free Turtles!

## Having issues?

Come join our [Discord channel](https://discord.gg/RJaeQqm) or [subreddit](https://www.reddit.com/r/TRTL/) and ask someone in our friendly community for help!
