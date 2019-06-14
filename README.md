[![npm](https://img.shields.io/npm/v/risejs.svg)](https://npmjs.org/package/risejs)  

# Rise Javascript Library

Through this library you can interact with a RISE node in an easy way. The library works both in the browser and Node.js.

## Documentation

All available methods are available [in the jsdoc](https://vekexasia.github.io/dpos-api-wrapper/interfaces/dposapi.html)

## Quick Start

### Include the library in your browser.

Either download `dist/browser/index.js` or use gitcdn as follows:

```html
<script type="text/javascript" src="https://unpkg.com/risejs/dist/browser/index.js"></script>

```

### Include it with npm (Suitable also for webpack/browserify)

```bash
npm i risjes -D
```

```javascript
var mainnet = require('risejs').rise;
var testnet = require('risejs').trise;
var custom = require('risejs').dposAPI.newWrapper('http://example.com:5566'); 

```


## Examples

All the APIs are designed to be easy to use. You can use both Callbacks or Promises; you decide.

For example you can open a new account by doing. Be aware that all the methods sending a secret over the network are
going to be deprecated:

```javascript
dposAPI.accounts.getAccount('123456R', function(error, account) {
  if (!error) {
    // yay!
    console.log(account);
  } else {
    console.log('error: ', error);
  }
  // ...
});
```

or

```javascript
rise.accounts.getAccount('123456R')
    .then(function (account) {
      console.log(account);
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
```

which can be even shorter if you write your code in TypeScript or ES6

```javascript
rise.accounts.open('secret')
    .then(console.log)
    .catch(error => console.log('error: ', error));
```


## Advanced Usage

In some cases you need to connect to multiple nodes.

To do so, just use the [newWrapper](https://vekexasia.github.io/dpos-api-wrapper/interfaces/dposapi.html#newwrapper) method:

