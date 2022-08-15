---
title: API Endpoints
---

# API Endpoints

All available API endpoints can be seen here on our Postman: https://www.postman.com/kryptokrona?tab=collections.
We also make sure to save these endpoints in the http directory in the repository where you can run the api endpoints
in for example WebStorm or other HTTP client.

## Examples

Below are some code examples in JavaScript and Python how to use the Hugin Cache to get data. To just try out the API and check out what kind of data that we expect to get back we recommend you check out our Postman.

### JavaScript

**POSTS**

Get all posts:

```javascript
import axios from 'axios'

axios.get('http://localhost:3000/api/v1/posts')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log('ERROR: Could not get all posts from Hugin Cache.')
  })
```

**HASHTAGS**

Get trending hashtags:

```javascript
import axios from 'axios'

axios.get('http://localhost:3000/api/v1/hashtags/trending')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log('ERROR: Could not get all trending hashtags from Hugin Cache.')
  })
```

### Python

**POSTS**

Get all posts:

```python
import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects

API_URL = 'http://localhost:3000/api/v1/posts'

try:
    headers = {'Content-Type': 'application/json'}
    response = requests.get(API_URL, headers=headers)
    print(response.json())
except (ConnectionError, Timeout, TooManyRedirects):
    print('ERROR: Could not get all posts from Hugin Cache.')
```


**HASHTAGS**

Get trending hashtags:

```python
import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects

API_URL = 'http://localhost:3000/api/v1/hashtags/trending'

try:
    headers = {'Content-Type': 'application/json'}
    response = requests.get(API_URL, headers=headers)
    print(response.json())
except (ConnectionError, Timeout, TooManyRedirects):
    print('ERROR: Could not get all trending hashtags from Hugin Cache.')
```