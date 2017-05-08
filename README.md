# bin-exists [![Build Status](https://travis-ci.org/iguntur/bin-exists.svg?branch=master)](https://travis-ci.org/iguntur/bin-exists) [![Build Status](https://ci.appveyor.com/api/projects/status/github/iguntur/bin-exists?branch=master&svg=true)](https://ci.appveyor.com/project/iguntur/bin-exists)

> Check if the binary exists on system


## Install

```bash
$ npm install --save bin-exists
```


## Usage


```js
const binExists = require('bin-exists');

// async
binExists('node').then(val => {
    console.log(val);
    //=> true
});

binExists('foo').then(val => {
    console.log(val);
    //=> false
});

// sync
console.log(binExists.sync('node'));
//=> true

console.log(binExists.sync('foo'));
//=> false
```


## API

### binExists(input)

Returns promise for an input value

### binExists.sync(input)

Returns boolean for an input value

#### input

Type: `string` <br>
Required: `true`

Input command name


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
