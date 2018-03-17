# Using a remote daemon with Simple Wallet

Sick of having to download and process the entire blockchain in order to check you balance or make a transfer?

There is an easy way to quickly get your wallet up and running. You can use a remote node running a TurtleCoin daemon so you don't have to run one locally to sync your wallet.

## How to do it

1. Open up a command prompt window and navigate to the folder that contains simplewallet.exe

1. Use the following command to start simplewallet

```text
simplewallet.exe --daemon-host <daemon-host> --daemon-port <daemon-port>
```
Simply replace *<daemon-host>* and *<daemon-port>* with values from one of the public remote daemons available below.

You can now follow your normal process to access your wallet.


## I don't want to have to type this every time

Create a new batch file (.bat) with the following lines inside and then double-click on the file to run it:

```text
@echo off
simplewallet.exe --daemon-host <daemon-host> --daemon-port <daemon-port>
pause
```

## List of known remote daemons

| Server | Port | Website |
|--|--|--|
| daemon.turtle.link | 11898 | http://turtle.link
| public.turtlenode.io | 11898 | https://turtlenode.io
