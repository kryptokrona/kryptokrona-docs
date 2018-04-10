# Using a remote daemon with Simple Wallet

Sick of having to download and process the entire blockchain in order to check your balance or make a transfer?

There is an easy way to quickly get your wallet up and running. You can use a remote node running a TurtleCoin daemon so you don't have to run one locally to sync your wallet.

## How to do it

1. Open up a command prompt window and navigate to the folder that contains `simplewallet.exe`.

1. Use the following command to start simplewallet:

`simplewallet.exe --remote-daemon host:port`
Replace `host:port` with values from one of the public remote daemons available below.

You can now follow your normal process to access your wallet.

Example- `simplewallet.exe --remote-daemon public.turtlenode.io:11898`

## I don't want to have to type this every time

1. Open notepad and type the following lines inside:

```text
@echo off
simplewallet.exe --daemon-host <daemon-host> --daemon-port <daemon-port>
pause
```

2. Replace `<daemon-host>` and `<daemon-port>` with values from one of the public remote daemons available below.

3. Save the filename as `start.bat` and save the file as `All files`.

4. Double click on the file to start the daemon.

## List of known remote daemons

| Host | Port | Website |
|--|--|--|
| daemon.turtle.link | 11898 | https://turtle.link
| public.turtlenode.io | 11898 | https://turtlenode.io
