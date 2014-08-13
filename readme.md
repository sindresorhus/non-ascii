# non-ascii [![Build Status](https://travis-ci.org/sindresorhus/non-ascii.svg?branch=master)](https://travis-ci.org/sindresorhus/non-ascii)

> Regular expression for matching non-ASCII characters


## Install

```sh
$ npm install --save non-ascii
```


## Usage

```js
var nonAscii = require('non-ascii');

nonAscii.test('hællæ');
//=> true

nonAscii.test('unicorn');
//=> false
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
