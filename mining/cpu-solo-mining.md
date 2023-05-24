---
title: Solo-mining Kryptokrona
---

# 😎 Solo-mining Kryptokrona

Solo-mining Kryptokrona means that you, alone, try to find the next block.\
**It is extremely hard, and not recommended** - try our [other guides](../../docs/guides/Mining/) if you want a more steady flow of XKR.\
Solo-mining is limited to _only your CPU_.

If you're sure you want to solo mine, let's continue.

### Setup and Running

Make sure you have `Kryptokrona` and `miner`, both can be found in [the latest release](https://github.com/kryptokrona/kryptokrona/releases).

_Note_: If they aren't there, you'll have to compile it yourself:

* [Windows](https://kryptokrona.se/Kryptokrona-win.zip)
* [Linux](https://kryptokrona.se/Kryptokrona-linux.zip)
* [OSX](https://kryptokrona.se/Kryptokrona-mac.zip)

Ensure **`Kryptokrona` is running and fully synced, or find a public node to use here**.

Go to your folder that has `miner.exe` in it and start a cmd prompt.

* This can easily be done by moving to the `Kryptokrona` directory in Windows Explorer, then typing `cmd` in the search bar and hitting enter.

In Linux, you may be able to right click on your directory and "Open in" Terminal.

When it opens, type:\
`miner --address SEKR.. --threads 4 --scan-time 1 --log-level 3`

If you're using a remote node, you can add the following flag:

```
--daemon-address url.to.node:11898
```

Repace `SEKR..` with your Kryptokrona public address.\
We recommend setting the `--threads` option to half of how many you have. So if you have 12 threads in your CPU, set it to `6`.

Example:

```bash
miner --address  SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR --threads 4 --scan-time 1 --log-level 3
```

Congratulations, you are now solo mining Kryptokrona from your CPU.

**Notes**

* `Kryptokrona` _must_ stay running for the miner to mine Kryptokrona, unless you use a remote node.
* Be patient. Finding a block may happen within the first few hours of mining. It also may take a week. Or it may never happen.
* If you accidently close out `Kryptokrona` you can restart the miner by hitting Ctrl+C on your keyboard, then re-entering the miner command given above.
* You may have to adjust the amount of threads based on your PC's capabilities(half of how many your CPU has is recommended).
