# RPC Errors
Here I will attempt to decipher the error messages that turtlecoind and walletd spit out, and try my best to give a reason behind the error, as well as a better possible error message. So let's start, shall we?

# Walletd Errors

- https://github.com/turtlecoin/turtlecoin/blob/master/src/Wallet/WalletErrors.h

## `Bad address`
**Description:**
This error can happen when an address you supply is invalid, or the address field in your request is improperly formatted.

**Solution:**
First make sure that the address you are attempting to send to is a valid 99 character long TRTL address. Next, make sure that your request is properly formatted - for instance, in a SendTransaction request where you are sending from multiple addresses, the address field must be an array of strings, and the address field within the transfers array must be a single string.

**Possible Alternative Error:**
> The supplied address parameter is invalid or in an incorrect format

## `Wrong amount`
**Description:**
This error can happen when the amount you are trying to send within a transaction is above the sum of your available inputs, or is in an incorrect format.

**Solution:**
This error can be solved by ensuring that the amount you are attempting to send is valid and within the bounds of your available balance, and that your wallet has been properly optimized/fused. 

**Possible Alternative Error:**
> The requested send amount is in an incorrect format, or your wallet does not have enough balance or available inputs to send the requested amount

## `MixIn count is too big`
**Description:**
The network can't find enough outputs to mix your transaction with. 
**Solution:**
This can be rectified by using zero mixin or lowering the amount you are sending. This is very unlikely to be encountered on mainnet, and is mainly found on testnet.
**Possible Alternative Error:**
>I'm not sure if internal node error suggests something else as well, I have seen it only when encountering the mixin too big error.

## `Object was not initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The password is wrong`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The object is already initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Internal error occurred`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Transaction size is too big`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Sum overflow`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The destination is empty`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Impossible to cancel transaction`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The wallet is in wrong state (maybe loading or saving), try again later`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The operation you've requested has been cancelled`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Transaction transfer impossible`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Wrong version`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Transaction fee is too small`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Cannot generate new key`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Index is out of range`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Address already exists`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `The wallet is in tracking mode`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Wrong parameters passed`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Object not found`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Requested wallet not found`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Change address required`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Change address not found`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Destination address required`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Destination address not found`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Wrong payment id format`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Wrong transaction extra format`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Mixin above maximum allowed threshold`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Mixin below minimum allowed threshold`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

# Turtlecoind Errors

- https://github.com/turtlecoin/turtlecoin/blob/master/src/NodeRpcProxy/NodeErrors.h
- https://github.com/turtlecoin/turtlecoin/blob/master/src/InProcessNode/InProcessNodeErrors.h

## `Object was not initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Object has been already initialized`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Network error`
**Description:**
TurtleCoind is not open / not responding.

**Solution:**
 I'm not sure if you can experience this with walletd, I have seen it with walletgreen.

**Possible Alternative Error:**
>

## `Node is busy`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Internal node error`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Error in request parameters`
**Description:**

**Solution:**

**Possible Alternative Error:**
>

## `Can't connect to daemon`
**Description:**

**Solution:**

**Possible Alternative Error:**
>
