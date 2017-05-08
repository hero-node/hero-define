This package can run independently as mock server during development.

## How to start

```
npm install
npm start

```
Once start successfully, you can see below messages:

```
Mock server is running at:
http://localhost:4000

```

It will start the mock server and dynamic loads URL routers in folder `modules`.

```javascript
"serverConfig": {
  // the prefix of mock server API routers url
  "mockAPIPrefix": "",
  // the initial port used by proxy/mock server
  "proxyBasePort": 3000,
}

```
