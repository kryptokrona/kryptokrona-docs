# sajodocs

This is the repo where the new frontend of the [existing wiki](https://github.com/turtlecoin/turtlecoin-wiki) resides.

Currently deployed with Netlify, check it out!

https://turtlewiki.netlify.com/

## Contributing Guidelines

You must follow [strict markdown](https://daringfireball.net/projects/markdown/), not GFM. Important points include-

* relative links without the `.md` extension 
  ex-> `(guides/Rainborg-Wat-Dat)` instead of `(Rainborg-Wat-Dat)`
  
* If (a)points are to be indented under oneanother, (b)or pictures/information are to be included under a "step 1", they must be indented by 4 spaces.
  
  ex (a)-> 
  
  *GFM*
           
   ```
   * Download wallet
     * Make a new wallet
    ```       
         
  *Strict MD*
           
   ```
   * Download a wallet
       * Make a new wallet
   ```    
      
  ex (b)-> 
  
  *GFM*
           
   ```
   1. Download a wallet
   ![make wallet](images/make-wallet.png)
   ---
   Incase you can't make, then just try again.
   ---
   2. Make a wallet
   Make sure you choose a strong password!
   3. Check that
     * it is saved comfily.
   ```
           
  *Strict MD*
           
   ```
   1.  Download a wallet
       ![make wallet](images/make-wallet.png)
       ---
       Incase you can't make, then just try again.
       ---
   2.  Make a wallet
       Make sure you choose a storng password!
   3.  Check that
       * it is saved comfily
   ```    
  
`
## Merging It
