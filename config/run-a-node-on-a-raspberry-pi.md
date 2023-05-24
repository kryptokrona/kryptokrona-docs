---
description: This guide goes into detail on how to run a XKR node on a Raspberry Pi
---

# 🍇 Run a Node on a Raspberry Pi

![](../../.gitbook/assets/pi-plug-in.gif)

_**For Raspberry Pi 3B+:**_\


`wget https://kryptokrona.se/downloads/xkr-rpi3.zip`\
\
`unzip kryptokrona-rpi-3b.zip`\


\
_**For Raspberry Pi 4B:**_

`wget https://kryptokrona.se/downloads/xkr-rpi-4b.zip`\
\
`unzip kryptokrona-rpi-4b.zip`

When you have unzipped the files, enter the directory where the kryptokrona binary was unzipped to and run the following to start your node:

`./kryptokrona --enable-cors=* --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`
