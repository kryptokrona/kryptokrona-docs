---
title: Deploy your own node
---

# Get the script

First we need to get the shell script from the Kryptokrona repository. Go to https://github.com/kryptokrona/kryptokrona/tree/master and to the directory called deploy. Inside this directory you will find a `setup-node.sh` file. Download this file to your computer. Now we just have to modify this script with our own constant values. Open the file up in your favorite text editor.

```sh
DOMAIN="node.c1phx.com"
EMAIL="c1phx@proton.me"
```

Change these values to your own values and save the file.

# Upload script to VPS

Now we need to upload this to the VPS. We are going to go through how to set it up on a Ubuntu VPS server. You can either copy all the contents of this file and login to your VPS and create this file with nano/vim and save it as `setup-node.sh` or send it through scp.

```sh
scp ~/Downloads/setup-node.sh ubuntu@ip-address:/home/ubuntu/setup-node.sh
```

This will copy the file to the home directory of the user ubuntu. Now we just have to login to the VPS and set the executable permissions.

```sh
ssh ubuntu@ip-address
chmod +x setup.node.sh
```

# Run script

Now we can run the file and it will take care of everything for us.

```sh
./setup-node.sh
```

This process will take a while since it will build the Kryptokrona core to a Docker Image. 