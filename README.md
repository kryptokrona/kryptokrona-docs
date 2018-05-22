# sajodocs

This is the repo where the new frontend of the [existing wiki](https://github.com/turtlecoin/turtlecoin-wiki) resides.

Currently deployed on a TurtleCoin subdomain using Netlify, check it out!

https://docs.turtlecoin.lol

## Contributing Guidelines

You must follow [strict markdown](https://daringfireball.net/projects/markdown/), not GFM. Important points include-

* relative links without the `.md` extension 
  ex-> `(guides/Rainborg-Wat-Dat)` instead of `(Rainborg-Wat-Dat)`
  
* Links are *case sensitive*
  Links to files in `mkdocs.yml` must *perfectly match* the casing of the actual files, and the links to these files from other places must *perfectly match* the casing in `mkdocs.yml`.
  
* If (a)points are to be indented under oneanother, (b)pictures/information are to be included under a "step 1", (c) codeblocks are to be made under steps/points, they are to be indented by 4 points. (d)Codeblocks must also start/end on a seperate line.
  
  **Note: Text given beyond this point wrapped in code blocks are just examples, observe the formatting and not what's written**
  
  #### Ex (a):
  
  ##### *Wiki MD*
           
   ```
   * Download wallet
     * Make a new wallet
       * give it a name
       ![walletname](guides/wallets/images/name.png)
    ```       
         
  ##### *Strict MD*
           
   ```
   * Download a wallet
       * Make a new wallet
           * give it a name
           ![walletname](images/name.png)
   ```    
      
  #### Ex (b): 
  
  ##### *Wiki MD*
           
   ```
   1. Download a wallet
   ![make wallet](guides/wallets/images/make-wallet.png)
   ---
   Incase you can't make, then just try again.
   ---
   2. Make a wallet
   Make sure you choose a strong password!
   3. Check that
     * it is saved [comfily](Being-Comfy).
   ```
           
  ##### *Strict MD*
           
   ```
   1.  Download a wallet
       ![make wallet](images/make-wallet.png)
       ---
       Incase you can't make, then just try again.
       ---
   2.  Make a wallet
       Make sure you choose a storng password!
   3.  Check that
       * it is saved [comfily](../Being-Comfy). //it assumed we are in the guides/wallets/ directory
   ```    
   
   #### Ex (c) and (d):
   
   ##### *Wiki MD*
   ```
   1. Install Linux
   2. Enter this:
   ```sudo apt-get install
   sudo apt-get upgrade```
   ```
   
   ##### *Strict MD*
   
 
   ```
   1.  Install Linux
   2.  Enter this:
       ```
       sudo apt-get install
       sudo apt-get upgrade
       ```
   ```
  

### More Information on Contributing

For more rules on contributing and the format to do it, compare 2 files from the existing wiki to this repo, and see how they shape up. If you observe them closely enough, you'll be able to figure out how to go about formatting.

---

#### Guide 1

**existing wiki**

https://raw.githubusercontent.com/turtlecoin/turtlecoin-wiki/master/guides/Bootstrapping-the-Blockchain.md

**this wiki**

https://raw.githubusercontent.com/turtlecoin/sajodocs/master/docs/guides/Bootstrapping-the-Blockchain.md

---

#### Guide 2

**existing wiki**

https://raw.githubusercontent.com/turtlecoin/turtlecoin-wiki/master/guides/mining/XMR-Stak-Linux-Guide.md 

**this wiki**

https://raw.githubusercontent.com/turtlecoin/sajodocs/master/docs/guides/mining/XMR-Stak-Linux-Guide.md

---
