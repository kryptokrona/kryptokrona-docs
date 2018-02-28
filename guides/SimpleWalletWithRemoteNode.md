# Using a remote daemon with Simple Wallet

Sick of having to download and process all the blocks in order to check you balance or make a transfer?

Well, there is an easy way to quickly get up and running. You can use a remote node running a Turtle coin daemon so you don't have to run one locally to sync your wallet.

## How to do it

1. Open up a command prompt window and navigate to the folder that contains simplewallet.exe

1. Use the following command to start simplewallet

       simplewallet.exe --daemon-host daemon.turtle.link --daemon-port 11898

You can now follow your normal process to access your wallet.

*At this time this is the only remote node that I am aware of. If you know of any others please feel free to add to the list below.*

## I don't want to have to type this every time

Me neither, simply create a new batch file with the following then double-click to run it:

    @echo off
    simplewallet.exe --daemon-host daemon.turtle.link --daemon-port 11898
    pause

## List of known remote daemons

| Server | Port |
|--|--|
| daemon.turtle.link | 11898 |
