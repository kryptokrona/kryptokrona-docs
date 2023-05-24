---
title: Deploy your own full node
description: >-
  This tutorial will guide you through the process of deploying a "Hugin Full
  Node", that is, a publically available Kryptokrona node bundled with Hugin API
  for extra functionality
---

# 🦅 Deploy a Hugin Full Node with Docker

## Setup

Let’s head over to the repository https://github.com/kryptokrona/kryptokrona and download a latest release: https://github.com/kryptokrona/kryptokrona/releases

Unzip the directory to a directory such as `~/Projects` then use the terminal to navigate to the directory of kryptokrona-`<version>`.

## Installation

First install Ansible locally.

### Mac using brew package manager:

* `brew install ansible`
* `brew install esolitos/ipa/sshpass`

### Ubuntu/Debian

```
sudo apt update
sudo apt install software-properties-common python3-jmespath
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
sudo apt install sshpass
```

### Windows using WSL

Since Ansible can not run natively on Windows we need to use the subsystem for Linux in Windows. Please check out this tutorial on how to get it started: https://docs.ansible.com/ansible/latest/user\_guide/windows\_faq.html#windows-faq-ansible

## Verify

Then we need to run the following to verify that our installation was successful:

`ansible --version`

## Configuration

So now that we have Ansible up and running on our OS we will start looking into what kind of configuration we need to do in order for us to provision our VPS with Kryptokrona.

If you have never heard what provisioning are it simply means “providing” or making something available. What Ansible does is to setup Infrastructure as Code (IaC) that we define what we need to install and what needs to be configured in code and thus we do not need to manually set this up and do this everytime we make a change or add something new. It does everything for us in one command when running it. This can be a huge time and energy saver. If something would have happen of a server or infrastructure we could just spin up a new environment very easily.

So let’s start by going into the ansible directory and open up the `prod.inventory` file (you can of course use your favorite text editor instead of Vim):

```
[vps]
<ip address/hostname here>
```

Now we see a block of \[vps] and under it are the domain name followed by the `letsencrypt_email`, `domain_name` on the same row. This is all the hosts we are going to use. In this case we are just going to provision to one VPS. You could put the IP address there instead of `n1.vxo.nu` and remove additional lines if you don't use multiple VPS instances.

If we would like to provision to two or multiple VPS we could just copy the first one and change the ip/hostname and Ansible would pick them all up and setup everything on those VPS as well.

So change `n1.xkr.nu` to your ip/hostname and the `letencrypt_email` and the `domain_name` and remove the second line `n2.xkr.nu`.

Please bare in mind that fix the DNS settings _first_ for this domain name and point to the VPS IP address a couple of hours before running this otherwise the certificate would not go through if it can not find that the DNS points to that domain name.

Also update `exporter_version` to the latest release over at https://github.com/prometheus/node\_exporter/releases/

So now save the file and we will start looking at `provision_vps.yml` file.

### Ansible Vault

Before we start with the provisioning we need to edit the file in `ansible/group_vars/vps.yml` with your config. This information will be encrypted later. Leave out the alert configs according to the comments if you don't want to have the alert system in place.

Then we need to encrypt the file:

* `ansible-vault encrypt ./group_vars/vps.yml`

Then save and put a password that you NEED to remember.

Then we need to use that password we set for the file itself and save that in a file on our host system. Do that by:

* `vim ~/kryptokrona.pwd`

Then add that same password inside this file that we set for the `vps.yml` file and we will use this file to run the playbook.

Then save and exit:

* `:wq`

Then open up the file `ansible.sh` and edit it and edit the line ssh-copy-id with your root@domain.com and add an additional line with the second or more VPS instances. Just remember that we need to be ROOT to be able to run this. So don't use another user.

So now we can start provisioning by running our shell script:

* `sudo chmod +x ansible.sh`
* `./ansible.sh`

## Common issues

#### NGINX configuration breaks

**Problem:** If you made some change in NGINX configuration and it breaks during setup, the next time it will not always be able to update it so it works again.\
**Solution:** SSH into the machine and change the configuration manually and restart the NGINX server. Check the logs with `journalctl -xe` if you don't find the issue right away.
