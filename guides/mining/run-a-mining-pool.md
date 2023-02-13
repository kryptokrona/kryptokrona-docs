---
description: >-
  This page will guide you through the process of setting up your very own
  mining pool for XKR! Mining pools are essential for keeping the kryptokrona
  network happy and decentralized.
---

# 🏊♂ Run a Mining Pool

Thanks to [@glen487](https://github.com/glen487) for this guide!



First make sure you are using **Ubuntu 18.04 LTS** (problems with the old node version 11 on 20.04)

```
sudo apt update
sudo apt upgrade
sudo apt-get install -y git curl wget screen build-essential libboost-all-dev cmake libssl-dev p7zip-full libsodium-dev
sudo reboot
```

### Node 12.x

Install Node version 12.x. currently required for cryptonote-nodejs-pool Add repository

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash
```

Note: you will get warning "Node.js 11.x is no longer actively supported" but there is currently no other version working.

```
sudo apt-get install gcc g++ make  nodejs
```

### Install Redis server

```
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt-get update
sudo apt-get install redis-server
```

Dont forget to tune redis-server:

* Add this to your /etc/rc.local and make it executable with you favorite editor sample:

```
sudo vi /etc/rc.local
```

Content

```
#!/bin/bash
echo never > /sys/kernel/mm/transparent_hugepage/enabled
echo 1024 > /proc/sys/net/core/somaxconn
```

* Then make it executable

```
sudo chmod +x /etc/rc.local
```

* Create a start script for rc.local

```
sudo vi /etc/systemd/system/rc-local.service
```

* Add this:

```
[Unit]
 Description=/etc/rc.local Compatibility
 ConditionPathExists=/etc/rc.local

[Service]
 Type=forking
 ExecStart=/etc/rc.local start
 TimeoutSec=0
 StandardOutput=tty
 RemainAfterExit=yes
 

[Install]
 WantedBy=multi-user.target
```

* Enable rc-local

```
sudo systemctl enable rc-local
```

* Check status

```
sudo systemctl status rc-local
```

* Start redis-server.

```
sudo  systemctl start redis-server
```

### Create a kryptokrona user for daemon and wallet

Recommend to use a dedicated user in this example user "kryptokrona" is used to make it simple.

* Add user "kryptokrona" no need for this user to login remotely.

```
sudo adduser --disabled-password --disabled-login kryptokrona
```

* sudo to the new user "kryptokrona"

```
sudo su - kryptokrona
```

* Visit Github and download latest binaries.

[https://github.com/kryptokrona/kryptokrona/releases/](https://github.com/kryptokrona/kryptokrona/releases/)

Currently 1.0.2:

* Download and unpack

```
wget https://github.com/kryptokrona/kryptokrona/releases/download/v.0.1.0.2/kryptokrona-linux.zip
7z x kryptokrona-linux.zip
```

* Download and unpack bootstrap of the Kryptokrona blockchain quickly get going.

```
wget https://swenode.org/bootstrap.zip
7z x bootstrap.zip
```

### Start the kryptokrona node

* Now go in to the kryptokrona directory

```
cd kryptokrona
```

* Create XKR daemon start script and start in a "screen" sessions. "screen -S node"
* Create a start script for the node:

```
vi node.bash
```

* Add and save: Note: The pool daemon is running on local host only.

```
#!/bin/bash
./kryptokrona --rpc-bind-ip=127.0.0.1 --rpc-bind-port=11898
```

* Make the new script executable

```
chmod +x node.bash
```

* And start the node inside the sceeen session

```
./node.bash
```

* The node daemon will start " Imported block with index xxxx" and then sync the missing block with up to the current height of the blockchain. This will take some time. Wait to you see the "Successfully synchronized with the kryptokrona Network." Also the ascii loggo will show :D
* ctrl+a to exist the screen session

If you want to go back to the screen session use: "screen -rd" this will list the current sessions running.

Then add the one you want sample: screen -rd 1337.node

### Create pool wallet.

If you already have a wallet you could import the seed for that. Not covered in this guide.

```
./xkrwallet
```

* Chose option 2 to create

Sample:

```
What would you like to do?: 2
What would you like to call your new wallet?: Pool
Give your new wallet a password: **********
Confirm your new password: **********
Welcome to your new wallet, here is your payment address:
SEKReV8VHMiUg4kMFBfWE5tfb5d9xRQrB4xY8mxR36d2EaCPGBN6kGh9xyc3eGJtr98XpxAVHcqDzRSRXU7U3rTBd3cjdv2Nhbr

Please copy your secret keys and mnemonic seed and store them in a secure location:
Private spend key:
f1a58c31f88d5f8779cefdd70c6bd7f1bfb207ff28b09a1b7bf64b35dc49850e

Private view key:
5f12972e781f67dec0e96c08ee498d0b76323080796a520e0727b240cbd97801

Mnemonic seed:
building building building building cent peaches ostrich washing dexterity  highway tsunami tumbling request punch rest reorder cuddled  alchemy jittery  request uttered lamb opus portents punch

If you lose these your wallet cannot be recreated!
```

Note: This is fake , but remember to store you info in a secure place. Not on the VPS or pool server.

exit the wallet

* Create a XKR wallet script and start in a other "screen" session.

```
screen -S wallet
```

* Create the wallet script

```
vi wallet.bash
```

* Add below:

```
#!/bin/bash
./kryptokrona-service -w Pool.wallet -p <secret password> --rpc-legacy-security
```

* Make the wallet start script executable

```
chmod +x wallet.bash
```

* Start the wallet and make sure everything looks good ./wallet.bash

Again make sure to save the wallet seed!

ctrl+a to exist the screen session

```
exit
```

### Create a pool user.

```
sudo adduser --disabled-password --disabled-login pool
```

* sudo to the new pool user

```
sudo su - pool
```

* Download pool software, recommend this version for XKR pool. The newer "cryptonote-nodejs-pool" have problem with unlocker when used for XKR.

```
git clone https://github.com/kryptokrona/kryptokrona-nodejs-pool.git
cd kryptokrona-nodejs-pool
```

Install Node modules needed

```
npm i
```

* Copy config\_examples/kryptokrona.json to config.json and edit the following:

```
        "poolHost": "your hostname or IP address here",

        "coin": "Kryptokrona",
        "symbol": "XKR",
        "coinUnits": 100000,
        "coinDecimalPlaces": 5,
        "coinDifficultyTarget": 90,
        "blockchainExplorer": "https://explorer.kryptokrona.org/?hash={id}#blockchain_block'",
        "transactionExplorer": "https://explorer.kryptokrona.org/?hash={id}#blockchain_transaction",
        "daemonType": "bytecoin",
        "cnAlgorithm": "cryptonight_pico",
        "cnVariant": 2,
        "cnBlobType": 2,
```

* Change the pool address to you wallet address for the pool under "poolServer"

```
poolAddress": "SEKRe.....",
```

* Change password under "api"

```
"password" ""
```

⚠ 1 warning This is IMPORTANT because this is also used for /admin.html access to the pool.

Note: "wallet" password not used if you run the wallet rpc with "--rpc-legacy-security"

Make sure payment looks something like this.

```
"payments": {
                "enabled": true,
                "interval": 120,
                "maxAddresses": 5,
                "mixin": 3,
                "priority": 0,
                "transferFee": 100,
                "dynamicTransferFee": true,
                "minerPayFee": true,
                "minPayment": 100000,
                "maxPayment": null,
                "maxTransactionAmount": 500000000,
                "denomination": 100000
        },
```

## Start a screen for pool

```
screen -S pool
```

* Create script to start pool

```
vi start-pool.bash
```

Content:

```
#!/bin/bash
node init.js -config=config.json
```

* Make the script exceutable

```
chmod +x start-pool.bash
```

If you get the problem with the dateformat.js when starting pool. Edit the "package.json" and change changing the "dateformat": "\*" to "dateformat": "4.5.1" in package.json, and run "npm update" again to fixed the issue. also change the git url to include "git+https://" like below.

Also add:

* "bufferutil": "^4.0.5",
* "utf-8-validate": "^5.0.7"
* "nodemailer": "4.0.1",

```
{
        "name": "cryptonote-nodejs-pool",
        "version": "1.4.0",
        "license": "GPL-2.0",
        "Original author": "Daniel Vandal",
        "Maintained by": "Musclesonvacation",
        "repository": {
                "type": "git",
                "url": "https://github.com/dvandal/cryptonote-nodejs-pool.git"
        },
        "dependencies": {
                "async": "1",
                "base58-native": "*",
                "bignum": "*",
                "bufferutil": "^4.0.5",
                "cli-color": "*",
                "cryptoforknote-util": "git+https://github.com/MoneroOcean/node-cryptoforknote-util.git",
                "cryptonight-hashing": "git+https://github.com/MoneroOcean/node-cryptonight-hashing.git",
                "dateformat": "4.5.1",
                "mailgun.js": "*",
                "node-telegram-bot-api": "*",
                "nodemailer": "4.0.1",
                "nodemailer-sendmail-transport": "*",
                "redis": "*",
                "socket.io": "^2.1.1",
                "time-ago": "*",
                "turtlecoin-multi-hashing": "git+https://github.com/turtlecoin/node8-multi-hashing.git",
                "utf-8-validate": "^5.0.7"
        },
        "engines": {
                "node": ">=8.11.3"
        }
}
```

Or simply download packages.json file for the pool from this repo. Make sure it's in the pool source directory.

```
wget https://raw.githubusercontent.com/glen487/XKR-Pool-Notes/main/packages.json
npm update
npm audit fix --force
```

Important run "npm update" after this change. Also "npm audit fix --force"

ctrl+a to exist the screen session

exit the pool user session

Use the sample website that comes with the pool under "website". In this guide webroot is pointing to "/var/www/html/pool"

Update the "config.js" in webroot to point to your API and add XKR explorer

Sample:

```
var api = "https://poolhostname.domain.tld/api/";
let parentCoin = ""

var email = "support@poolhost.com";
var telegram = "https://t.me/YourPool";
var discord = "https://discordapp.com/invite/YourPool";
var facebook = "https://www.facebook.com/<YourPoolFacebook>";

var marketCurrencies = ["{symbol}-BTC", "{symbol}-LTC", "{symbol}-DOGE", "{symbol}-USDT", "{symbol}-USD", "{symbol}-EUR", "{symbol}-CAD"];

var blockchainExplorer = "https://explorer.kryptokrona.se/?hash={id}#blockchain_block";
var transactionExplorer = "https://explorer.kryptokrona.se/?hash={id}#blockchain_transaction";

var blockchainExplorerMerged = "";
var transactionExplorerMerged = "";

var themeCss = "themes/default.css";
var defaultLang = 'en';
```

### Install you favorite webserver

If you want to support TLS on pool ports, copy your files to filename cert.pem, privkey.pem (no password) and chain.pem (or change in pool config.json) to the pool directory to replace the sample files. Remember to do this also after renewal. Follow the latest cert-bot if you need a certificate.

* Sample Nginx

```
sudo apt install nginx
```

* Create the nginx pool config.

```
sudo vi /etc/nginx/sites-available/pool 
```

Content in this sample with SSL certificate from Lets Replace "hostname.domain.tld" with your pool hostname and domain.

```
server {
        # Enable HTTP/2
        listen 443 ssl http2 default_server;
        server_name hostname.domain.tld;
        ssl_certificate /etc/letsencrypt/live/hostname.domain.tld/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/hostname.domain.tld/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        root /var/www/html/pool;

        # Add index.php to the list if you are using PHP
        index index.html index.htm;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
                #add_header 'Access-Control-Allow-Origin' 'origin-list' always;
                if ($http_origin ~* (https?://[^/]*\.kryptokrona\.se(:[0-9]+)?)) {
                add_header 'Access-Control-Allow-Origin' "$http_origin";
                }
                #add_header 'Access-Control-Allow-Origin' '*';
                #add_header 'Access-Control-Allow-Credentials' 'true' always;
                add_header X-Content-Type-Options "nosniff" always;
                add_header X-Frame-Options "SAMEORIGIN";
                add_header X-XSS-Protection "1; mode=block";
                add_header Referrer-Policy origin-when-cross-origin;
                add_header X-Permitted-Cross-Domain-Policies none;

                 # Add Security cookie flags
                proxy_cookie_path ~(.*) "$1; SameSite=strict; secure; httponly";
        }
        if ($request_method !~ ^(GET|HEAD|POST)$ )
               {
                return 405;
               }

        location ~ ^/api/(.*) {
            proxy_pass http://127.0.0.1:8117/$1$is_args$args;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # Add Security cookie flags
            proxy_cookie_path ~(.*) "$1; SameSite=strict; secure; httponly";
        }

        # Allow access to the ACME Challenge for Let's Encrypt <- <3
        location ~ /\.well-known\/acme-challenge {
                allow all;
        }


        # Deny all attempts to access hidden files
        # such as .htaccess, .htpasswd, .DS_Store (Mac), .git, .etc...

        location ~ /\. {
                deny all;
        }
}
```
