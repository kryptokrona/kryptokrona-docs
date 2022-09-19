---
title: Onion Services
---

# Onion Services

We use Tor to provide API data through a Onion Service. 
To be able to access it use the Onion address on your server (use `tail /var/lib/tor/hugin_cache/hostname` to read it) 
and open a Onion browser such as Tor. 
So for example read the posts from the API use https://<your_onion_address>/api/v1/posts