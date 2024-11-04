# 💻 Using Kryptokrona Desktop Wallet \*deprecated\*

This wallet is discontinued, and we recommend using the new one found [here](Using-Kryptokrona-Wallet.md).

Kryptokrona Wallet is a cross-platform GUI wallet that is written using JavaScript and the Electron framework together with React. The UI was inspired by Electrum's QT client. It's simple, easy to use, and utilizes the latest in backend technologies from the kryptokrona™ development team.

### Downloading

The installers can be found [here](https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/latest). Download the appropriate file for your computer. The files are located under the "Assets" tag, just scroll down to the bottom of the latest release.

Just in case you're not sure what to download, here is a list of the files and what operating systems they go to:

* \*_Windows_- - `.exe` file
* \*_Mac_- - `.dmg` file
* \*_Linux_- - `.AppImage` file

### Installing

#### Installing on Windows

After downloading the .exe file, navigate to the folder you downloaded it to and double-click it. You'll be greeted with a scary-looking screen from Windows saying it protected your PC by blocking an uncregonized app:

Click **more info** and then click **run anyway.** After this, you'll be able to install the program normally.

**Why do we have to do this anyway? Is it safe?**

I assure you that this wallet is perfectly safe to use. The code is all published open source under the MIT license and [visible for anyone to examine](https://github.com/kryptokrona/kryptokrona-desktop-wallet/). If you have any doubts, please ask the community for guidance in the [kryptokrona Discord server](http://chat.kryptokrona.lol).

Windows is a proprietary operating system and they restrict programs running on their operating system to trusted developers. You need a valid windows signing key in order to sign windows applications as a trusted developer, which costs about $200 per year at this time of writing. As this is quite alot and the windows nag screen is relatively easy to bypass, this is not a very high priority for us at this time, although it is something we'd like to do in the future. If you'd like to see this happen faster, you can **donate to the developer:**

SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR

Once you've made it past the nag screen and onto the installer screen, select your choices the installer asks for and install the program. Once it is completed installing, you can launch it by double-clicking the icon on your desktop or navigating to Kryptokrona Wallet in the start menu and clicking it. The first step of the installer screen is pictured below:

#### Installing on Mac

Double click the .dmg file, and the installer prompt will appear. Simply drag the Kryptokrona Wallet icon on the left into the "Applications" directory on the right in order to install it.

**Important: Try to run the program at this point.** (You can do so by clicking on the icon in the dock.) Unfortunately, you'll get a nasty error message from MacOS, which we'll take care of in the next step.

In order to run the program, navigate to **System Preferences**, and click **Security & Privacy**. You'll see a message near the bottom that Kryptokrona was blocked because it is not from an identified developer, with a button next to it that says **Open Anyway**. Click that button.

After this, you can run the program as normal by double clicking on the icon on the dock. (Unfortunately, you will have to do this every time the application updates as well)

**Why do we have to do this anyway? Is it safe?**

I assure you that this wallet is perfectly safe to use. The code is all published open source under the MIT license and [visible for anyone to examine](https://github.com/kryptokrona/kryptokrona-desktop-wallet/). If you have any doubts, please ask the community for guidance in the [kryptokrona Discord server](http://chat.kryptokrona.lol).

MacOS is a proprietary operating system and they restrict what programs can run on their OS to only developers with a valid Apple Developer key. Unless the program is signed with a valid Apple Developer key, you will have to override it like this in order to run it. We're currently looking into making this happen, but the cost to get a key is about $100 USD. Until we can scrounge up the funds, you'll unfortunately have to deal with this inconvenience. :( If you'd like to make this happen faster, **please donate to the developer**:

SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR

#### Installing on Linux

After downloading the AppImage file, you'll need to mark it as an executable so that your system can run it. You can do it in either of these two methods:

**Using the GUI**

1. Right click the file
2. Click on `Properties`.
3. Click on `Permissions`.
4. Tick the box next to `Allow executing file as program`.

**Using the Command Line**

1. Open a terminal in the directory the appimage file is stored in.
2. Input this command: `chmod +x Kryptokrona-wallet*.AppImage` (this will allow file to run as a program, which is required)

After completing one of the two above steps, you can launch the wallet simply by double clicking the AppImage file. I recommend moving the AppImage file into a dedicated folder inside your home directory for AppImages. A good location would be `/home/your_username/Apps`

### Using Kryptokrona Wallet

Upon opening Kryptokrona Wallet for the first time, you will see this splash screen:

You have the following options, and clicking each button will take you to the corresponding utility in the wallet. Click on the link to jump to right section of this guide depending on what you'd like to do.

* [Open an Existing Wallet](using-kryptokrona-wallet-1.md#Opening-a-Wallet)
* [Create a New Wallet](using-kryptokrona-wallet-1.md#Creating-a-Wallet)
* [Import from Keys or Seed](using-kryptokrona-wallet-1.md#Restoring-your-Wallet-from-Seed-or-Keys)

Once you've created a wallet through one of these options, it will automatically open in the future, so you can always open your wallet up with one click when you need to send money.

#### Creating a Wallet

1. Click on `File` in the top left and then `New` (or press `Ctrl + N` on your keyboard)
2. Choose a directory and a name to save the wallet (no need for an extension, but you can use one if you'd like). You'll see the below message when it is successfully created.

Once your wallet is created, you can navigate to Wallet > Password in the top menu to set a password if desired. You're now all set to start receiving and sending funds with kryptokrona™ and Kryptokrona Wallet!

#### Opening a Wallet

1. Click on `File` in the top left and then `Open` (Or press `Ctrl + O` on your keyboard)
2. Navigate to the directory where your wallet is saved and double click on the file to open it.

Your wallet is now open and you're ready to start using it! Please note that Kryptokrona Wallet utilizes the new and improved wallet file format and is not compatible with other GUI wallet files. If you have a previous wallet file, follow the next section of the guide to import your keys or seed into Kryptokrona Wallet.

#### Restoring a Wallet from Seed or Keys

1. Click on `File` in the top left.
2. Click `Restore`.

You'll be presented with a dialog box asking if you'd like to restore from private keys or seed. Depending on what option you take, follow the appropriate guide below:

**Private Spend and View Keys**

1. Enter your private spend key
2. Enter your private view key
3. **(Optional)** Enter the block height your wallet was created on to start scanning for transactions. This can greatly speed up the process depending on how recent your wallet is.

If you don't know what height to start scanning from, that's OK, just leave this field blank and it will scan from 0.

1. Click `Import`.
2. Choose a directory and a name to save the wallet.
3. If the wallet was restored succesfully, you will be given a confirmation message:

After this, your wallet will automatically open. Add a password if desired by navigating to Wallet > Password in the top menu. You've now finished importing your wallet into Kryptokrona Wallet and are ready to start using it!

**25 Word Mnemonic Seed**

1. Enter your mnemonic seed
2. **(Optional)** Enter the block height your wallet was created on to start scanning for transactions. This can greatly speed up the process depending on how recent your wallet is.

If you don't know what height to start scanning from, that's OK, just leave this field blank and it will scan from 0.

1. Click `Import`.
2. Choose a directory and a name to save the wallet
3. If the wallet was restored succesfully, you will be given a confirmation message:

After this, your wallet will automatically open. Add a password if desired by navigating to Wallet > Password in the top menu. You've now finished importing your wallet into Kryptokrona Wallet and are ready to start using it!

#### IMPORTANT: Make Sure Your Funds are Safe

Each kryptokrona™ wallet is essentially just a pair of keys (the _view key_ and _spend key_) from which the public address is derived. It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access).

In the event of a lost or corrupted wallet file, computer crash, etc., the _view key_, _spend key_, or _mnemonic seed_ are the **only** way to restore a wallet and recover the funds it holds.

**DO NOT SHARE IT WITH ANYONE**. **Anyone who has these can **_**access your funds**_** and has **_**complete control**_** over your wallet.**

Click on `Wallet` in the top left, and then `Backup`. A screen will appear with your address, private spend and view keys, and your mnemonic seed.

Copy the text and store it **safely and securely**. One good way is to print them out on paper and keep them somewhere safe.

#### Viewing Wallet Address

* Click on Receive in the top left
* Your kryptokrona™ wallet address and a QR code will be displayed. Click on the `Copy to Clipboard` button to copy your address directly.

#### Viewing Wallet Balance

You can see your wallet balance at the bottom of the screen in the main `Wallet` screen. You can also see a historical balance, similar to how a checkbook or bank account functions, on the right-most column of the transaction table.

#### Sending Transactions

To send kryptokrona™:

1. Click on the `Send` tab
2. Type/paste the address you want to send the XKR to
3. Type the amount of XKR you want to send (like `100`). Note that the total amount with fees will be displayed for you automatically on the right side, including a network minumum fee of 0.1 XKR and a node fee if you're connected to a node with a fee.
4. Enter the payment ID if the recipient has provided one, or if you require one for your own purposes. Check the [payment ID section](using-kryptokrona-wallet-1.md#payment-ids-and-how-to-use-them) if you're not sure how/when to use it.
5. Click on `Send`
6. Confirm details and click `OK` if you're alright with the transaction. Otherwise, click `Cancel` or press `esc` on your keyboard.

* If the transaction is successful, you will be given a confirmation message:

#### Payment IDs and How to Use Them

Because transactions on the kryptokrona™ blockchain are privatized, in some situations a payment ID is necessary for the recipient to be able to determine where the payment came from, for instance when depositing to an exchange or other service.

**If you're depositing to an exchange, be sure to include a payment ID if requested otherwise your funds may be lost!**

To send a transaction with a payment ID, simply enter it in the send screen.

Note that typically, the service/recipient will generate and provide the required payment ID. In this case,you should _not generate your own using the Generate Random Payment ID link below the field._

#### Exiting the Wallet

You can safely exit the wallet in any of these methods:

* Press the **X** button at the top right corner
* Click on `File` in the top left, then select `Close`
* Press `Ctrl + W` on your keyboard

#### Getting Help

If you need any assistance, navigate to Help > Support in the top menu of the wallet, and you will be invited to the official support discord. You can also navigate to the official support discord from [this link](https://discord.gg/ShhSa6), or you can also ask in the `#help` channel of the official [kryptokrona™ Discord server](http://chat.kryptokrona.lol).

### Troubleshooting and Reporting Bugs

As much effort as possible is made to ensure Kryptokrona is free of bugs and works as intended. Alas, I am only one man and sometimes things can slip through unnoticed. If you'd like to report a bug, it is important to get log output of the bug occurring, that way I and the upstream developers can more easily figure out what is going on. You can either report the issue through GitHub or you may ping me @ExtraHash in the kryptokrona discord server. Without further ado, here are instructions on how to get a log file:

#### How To Get A Log File and Send It To The Developers

1. Start Kryptokrona Wallet as you normally do. You should be greeted by the login screen.
2. Log in to the wallet. Your wallet transaction history should display. Press the settings cog button on the top right.
3. The settings page should be displayed. On the left menu, click the "Wallet" tab to go to the wallet settings.
4. Click the drop down labelled "WalletBackend Log Level". Select DEBUG as the option. This is usually sufficient, the developers may ask you to repeat this process with TRACE selected.
5. Click the "Show Console" button, located directly under the log level dropdown. A new window will open up. Click "Console" on the top of that new window.
6. IMPORTANT: Go back to the wallet. Reproduce whatever bug you're trying to report. If it's a transaction bug, make a transaction, if it's a syncing bug, allow it to attempt to sync for a period of time, etc.
7. Back in the console window, right click the text you should see scrolling by and select "Save as." Save the log file somewhere on your computer that you know how to access (i.e., your desktop). Drag and drop the log file into the GitHub text box or Discord with your bug report.

That's it! You've successfully saved a log file and helped your developer solve your problem. The developer will review the log file and attempt to make any necessary fixes.
