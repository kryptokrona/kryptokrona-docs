# Setup

Let’s head over to the repository https://github.com/kryptokrona/hugin-api and download a latest release: https://github.com/kryptokrona/hugin-api/releases

Unzip the directory to a directory such as `~/Projects` then use the terminal to navigate to the directory of hugin-api-`<version>`.

# Installation

First install Ansible locally.

## Mac using brew package manager:

- `brew install ansible`
- `brew install esolitos/ipa/sshpass`

## Ubuntu/Debian

```sh
sudo apt update
sudo apt install software-properties-common python3-jmespath
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
sudo apt install sshpass
```

## Windows using WSL

Since Ansible can not run natively on Windows we need to use the subsystem for Linux in Windows. Please check out this tutorial on how to get it started: https://docs.ansible.com/ansible/latest/user_guide/windows_faq.html#windows-faq-ansible

# Verify

Then we need to run the following to verify that our installation was successful:

`ansible --version`

# Configuration

So now that we have Ansible up and running on our OS we will start looking into what kind of configuration we need to do in order for us to provision our VPS with Hugin API.

If you have never heard what provisioning are it simply means “providing” or making something available. What Ansible does is to setup Infrastructure as Code (IaC) that we define what we need to install and what needs to be configured in code and thus we do not need to manually set this up and do this everytime we make a change or add something new. It does everything for us in one command when running it. This can be a huge time and energy saver. If something would have happen of a server or infrastructure we could just spin up a new environment very easily.

So let’s start by going into the ansible directory and open up the `prod.inventory` file (you can of course use your favorite text editor instead of Vim):

``` 
[vps]
<ip address/hostname here>
```

Now we see a block of [vps] and under it are the domain name followed by the `letsencrypt_email`, `domain_name` on the same row. This is all the hosts we are going to use. In this case we are just going to provision to one VPS. You could put the IP address there instead of `api.hugin.chat` and it would work perfectly fine.

If we would like to provision to two or multiple VPS we could just copy the first one and change the ip/hostname and Ansible would pick them all up and setup everything on those VPS as well.

So change `api.hugin.chat` to your ip/hostname and the `letencrypt_email` and the `domain_name`.

Please bare in mind that fix the DNS settings first for this domain name and point to the VPS IP address a couple of hours before running this otherwise the certificate would not go through if it can not find that the DNS points to that domain name.

Also update `exporter_version` to the latest release over at https://github.com/prometheus/node_exporter/releases/

So now save the file and we will start looking at `provision_vps.yml` file.

In this file we have some things we need to change in order for be able to run the playbook. First we need to set a hugin_node_server of where to pick up the data for the Hugin API application. It could be your own or just leave the value there if you would like.

Then we need to uncomment the line “base” currently in the screenshot on line 30 so we do a configuration of the SSH public key on the VPS as well as disabling the default login with username/password so we will only use our private key to login to the VPS.


## Ansible Vault

Before we start with the provisioning we need to generate one vault file:

- `ansible-vault create ./group_vars/vps.yml`

Now enter a password for the file itself when prompted and then it will automatically open up Vi/Vim and we enter the following:

```yml
ansible_user: <username>
ansible_password: <passsword>
vault_vps_user: ansible
vault_vps_password: <ansible-password>
vault_postgres_db_user: <postgres-username>
vault_postgres_db_password: <postgres-password>
vault_postgres_db_name: <postgres-db-name>
```

Then save and exit:

- `:wq`

Then we need to use that password we set for the file itself and save that in a file on our host system. Do that by:

- `vim ~/hugin.cache.pwd`

Then add that same password inside this file and we will use this file to run the playbook.

Then save and exit:

- `:wq`

Now we need to permanently add our SSH key. Open up our bash rc file (depending on OS you might have a different file name for this in your home directory). Open up ~/.bashrc or ~/.bash_profile and add this:

```sh
eval $(ssh-agent)
ssh-add ~/.ssh/id_hugin_cache
```

Then run to update:

- `source ~/.bashrc`

Or:

- `source ~/.bash_profile`

Open up **provision_vps.yml** remove the comment for "base". We are not using that in the pipeline but for manual deploy this is needed.

So now we can start provisioning by running our shell script:

- `sudo chmod +x ansible.sh`
- `./ansible.sh`

If we add multiple VPS instances in our inventory, we need to copy our public key to new one manually otherwise we will not be able to connect to it later. It will give us a permission denied error. So copy the public key by running:

- `ssh-copy-id -i ~/.ssh/id_hugin_cache.pub root@new-vps`


# Common issues

### NGINX configuration breaks

**Problem:** If you made some change in NGINX configuration and it breaks during setup, the next time it will not always be able to update it so it works again.\
**Solution:** SSH into the machine and change the configuration manually and restart the NGINX server. Check the logs with `journalctl -xe` if you don't find the issue right away.