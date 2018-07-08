# RPC Errors
Here I will attempt to decipher the error messages that turtlecoind and walletd spit out, and try my best to give a reason behind the error, as well as a better possible error message. So let's start, shall we?

# Walletd Errors

- https://github.com/turtlecoin/turtlecoin/blob/master/src/Wallet/WalletErrors.h

## `BAD_ADDRESS / Bad address`
**Description:**
This error can happen when an address you supply is invalid, or the address field in your request is improperly formatted.

**Solution:**
First make sure that the address you are attempting to send to is a valid 99 character long TRTL address, or 236 character integrated address. Next, make sure that your request is properly formatted - for instance, in a SendTransaction request where you are sending from multiple addresses, the address field must be an array of strings, and the address field within the transfers array must be a single string.

**Possible Alternative Error:**
> The supplied address parameter is invalid or in an incorrect format

## `WRONG_AMOUNT / Wrong amount`
**Description:**
This error can happen when the amount you are trying to send within a transaction is above the sum of your available inputs, or is in an incorrect format. This can also occur when you have *dust* inputs that are unsendable. These generally comprise a very small amount of your balance, but may prevent you from sending all your balance at once.

**Solution:**
This error can be solved by ensuring that the amount you are attempting to send is valid and within the bounds of your available balance, and that your wallet has been properly optimized/fused. 

**Possible Alternative Error:**
> The requested send amount is in an incorrect format, or your wallet does not have enough balance or available inputs to send the requested amount

## `MIXIN_COUNT_TOO_BIG / MixIn count is too big`
**Description:**
The network can't find enough outputs to mix your transaction with. 
**Solution:**
This can be rectified by using zero mixin or lowering the amount you are sending. This is very unlikely to be encountered on mainnet, and is mainly found on testnet.
**Possible Alternative Error:**
>I'm not sure if internal node error suggests something else as well, I have seen it only when encountering the mixin too big error.

## `NOT_INITIALIZED / Object was not initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `WRONG_PASSWORD / The password is wrong`
**Description:**
This is a pretty simple one. The wallet password is wrong. If you're 100% sure it's correct, check that you're opening a wallet file, and it's not got corrupted.

**Solution:**
Enter the correct password! Import via keys if you cannot remember it.

**Possible Alternative Error:**
>The wallet password is incorrect

## `ALREADY_INITIALIZED / The object is already initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `INTERNAL_WALLET_ERROR / Internal error occurred`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `TRANSACTION_SIZE_TOO_BIG / Transaction size is too big`
**Description:**
This is caused when the transaction size (in bytes, not amount), is too large to fit into a block. Currently this limit is around 125k bytes, and the size of transactions is based upon how many key images you need to supply for the transaction - each key image comes from a previous transaction, and so if you have lots of small payments, your transactions will need a lot of key images to sum to the desired amount.

**Solution:**
You can either:
- Perform fusion transactions, to fuse your small key images into larger ones, letting you send more at once, or
- Split your one transaction into multiple transactions, until each smaller one can fit into a block. This will slightly raise the fee you have to pay of course.

**Possible Alternative Error:**
>Transaction is too large to fit in a block, try reducing the amount you are sending

## `SUM_OVERFLOW / Sum overflow`
**Description:**
When sending a transaction, the amount+fee would cause integer overflow. This is very unlikely to occur in practice, as the data type used is a uint64_t.

**Solution:**
Send a smaller amount in one transaction.

**Possible Alternative Error:**
>Amount + fee would cause integer overflow. Please lower the amount you are sending.

## `ZERO_DESTINATION / The destination is empty`
**Description:**
This is caused by either:
- A transaction amount of zero, or
- No address was specified to transfer to.

**Solution:**
Ensure you supply an address parameter in the transfers array, and that the amount is larger than zero.

**Possible Alternative Error:**
No destination address specified, or amount specified is zero
>

## `TX_CANCEL_IMPOSSIBLE / Impossible to cancel transaction`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `WRONG_STATE / The wallet is in wrong state (maybe loading or saving), try again later`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `OPERATION_CANCELLED / The operation you've requested has been cancelled`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `TX_TRANSFER_IMPOSSIBLE / Transaction transfer impossible`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `WRONG_VERSION / Wrong version`
**Description:**
This is encountered when loading the wallet file with walletd. There are a few possible causes for it:
- The file you are trying to load doesn't exist. This is common if you open `mywallet` instead of `mywallet.wallet`.
- The file you are trying to load is not a wallet file.
- The wallet file has got corrupted.

**Solution:**
Ensure the file you are trying to open is both a valid wallet file, and exists.

**Possible Alternative Error:**
>Wallet file does not exist, is corrupted, or is not a wallet file.


## `FEE_TOO_SMALL / Transaction fee is too small`
**Description:**
This occurs if the transaction fee is below the minimum allowed.

**Solution:**
Make sure the fee used is at least 0.1 TRTL, or 10 in atomic units.

**Possible Alternative Error:**
>Transaction fee lower than minimum of 0.1 TRTL.

## `KEY_GENERATION_ERROR / Cannot generate new key`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `INDEX_OUT_OF_RANGE / Index is out of range`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `ADDRESS_ALREADY_EXISTS / Address already exists`
**Description:**
The address you are trying to add with createAddress() already exists.

**Solution:**
Um, address already exists, so don't do that? If you just want a new random address, don't supply the view/spend key parameter, and it will generate a random one.

**Possible Alternative Error:**
>The address you are trying to create already exists in this wallet.

## `TRACKING_MODE / The wallet is in tracking mode`
**Description:**
This error occurs when you are using a view only wallet (A tracking wallet), and call a method that can only be used with wallets that can spend, such as sendTransaction().

**Solution:**
Don't use methods which require spending with a view only wallet.

**Possible Alternative Error:**
>This method is not usable in a view only wallet.

## `WRONG_PARAMETERS / Wrong parameters passed`
**Description:**
This error can occur in a number of scenarios.
- A supplied private/public key is invalid/cannot be parsed.
- A spend key was specified to createAddress in a view only wallet, or a null spend key was specified in a non view only wallet
- The blocks count given is less than 1
- The blockindex given is less than 1

For more info on the exact error, check your walletd.log or console window.

**Solution:**
Check the api-docs for examples on how to use the method you are toying with, to help determine what parameter is invalid.

**Possible Alternative Error:**
>Individual errors for each specific issue.

## `OBJECT_NOT_FOUND / Object not found`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `WALLET_NOT_FOUND / Requested wallet not found`
**Description:**
The wallet address you are trying to retrieve the balance of does not exist in your wallet container.

**Solution:**
Ensure you are checking the balance of a wallet that exists in your container.

**Possible Alternative Error:**
>Wallet address could not be found in the wallet container.

## `CHANGE_ADDRESS_REQUIRED / Change address required`
**Description:**
This occurs when you omit the change address parameter in a transaction. This is not required in a single address wallet, but if multiple addresses have been added to a wallet container, then the change address is required. Generally, you will want this value to be the same as the address you are sending from.

**Solution:**
Include a change address with your requests to allow your code to work with single and multi address wallets.

**Possible Alternative Error:**
>No change address given with a multi address wallet.

## `CHANGE_ADDRESS_NOT_FOUND / Change address not found`
**Description:**
This occurs when the address you specified in the change address parameter is not a wallet that exists in your wallet container file.

**Solution:**
Make sure you set the change address value to a wallet address that exists in your container.

**Possible Alternative Error:**
>Change address is not present in your wallet container.

## `DESTINATION_ADDRESS_REQUIRED / Destination address required`
**Description:**
This occurs when you omit the destination address parameter in a fusion transaction. This is not required in a single address wallet, but if multiple addresses have been added to a wallet container, then the destination address is required. Generally, you will want this value to be the same as the address you are sending from.

**Solution:**
Include a destination address with your fusion transactions to allow your code to work with single and multi address wallets.

**Possible Alternative Error:**
>No destination address given with a multi address wallet.

## `DESTINATION_ADDRESS_NOT_FOUND / Destination address not found`
**Description:**
This occurs when the address you specified in the destination address parameter is not a wallet that exists in your wallet container file.

**Solution:**
Make sure you set the destination address value to a wallet address that exists in your container.

**Possible Alternative Error:**
>Destination address is not present in your wallet container.

## `BAD_PAYMENT_ID / Wrong payment id format`
**Description:**
Your payment ID is not a valid, 64 char hex string.

**Solution:**
Ensure you are correctly generating payment ID's. They should contain only a-z 0-9 characters, and be 64 characters long.

**Possible Alternative Error:**
>Payment ID is not 64 characters or is not a valid hex string.

## `BAD_TRANSACTION_EXTRA / Wrong transaction extra format`
**Description:**
This occurs when your transaction extra is not hex encoded data.

**Solution:**
Your transaction extra should only contain a-z 0-9 characters.

**Possible Alternative Error:**
>Transaction extra is not a valid hex string.

## `MIXIN_ABOVE_THRESHOLD / Mixin above maximum allowed threshold`
**Description:**
This occurs when your anonymity value is above the maximum allowed. You can check the current mixin limits by viewing their values in CryptoNoteConfig.h. Currently, the maximum allowed mixin is 100. This will change to 7 at block 620k.

**Solution:**
Make sure your anonymity value is within the allowed limits.

**Possible Alternative Error:**
>Mixin is above maximum allowed threshold of \<x\>

## `MIXIN_BELOW_THRESHOLD / Mixin below minimum allowed threshold`
**Description:**
This occurs when your anonymity value is above the minimum allowed. You can check the current mixin limits by viewing their values in CryptoNoteConfig.h. Currently, the minimum allowed mixin is 0. This will change to 7 at block 620k.

**Solution:**
Make sure your anonymity value is withing the allowed limits.

**Possible Alternative Error:**
>Mixin is below minimum allowed threshold of \<x\>

## `CONFLICTING_PAYMENT_IDS / Multiple conflicting payment ID's were specified via the use of integrated addresses`
**Description:**
When using integrated addresses, if a payment ID is specified, it must match the payment ID included in the integrated address. Furthermore, if multiple integrated addresses are used, they must all have the same payment ID.

**Solution:**
Only send to one integrated address at once, and don't include a payment ID, to avoid confusion.

**Possible Alternative Error:**
>

# Turtlecoind Errors

- https://github.com/turtlecoin/turtlecoin/blob/master/src/NodeRpcProxy/NodeErrors.h
- https://github.com/turtlecoin/turtlecoin/blob/master/src/InProcessNode/InProcessNodeErrors.h

## `NOT_INITIALIZED / Object was not initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `ALREADY_INITIALIZED / Object has been already initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `NETWORK_ERROR / Network error`
**Description:**
TurtleCoind is not open / not responding.

**Solution:**
 I'm not sure if you can experience this with walletd, I have seen it with walletgreen.

**Possible Alternative Error:**
>

## `NODE_BUSY / Node is busy`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `INTERNAL_NODE_ERROR / Internal node error`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `REQUEST_ERROR / Error in request parameters`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `CONNECT_ERROR / Can't connect to daemon`
**Description:**

**Solution:**

**Possible Alternative Error:**
>
