# non-ascii [![Build Status](https://travis-ci.org/sindresorhus/non-ascii.svg?branch=master)](https://travis-ci.org/sindresorhus/non-ascii)

> Regular expression for matching non-ASCII characters


## Install

```
$ npm install non-ascii
```


## Usage

```js
const nonAscii = require('non-ascii');

nonAscii.test('hællæ');
//=> true

nonAscii.test('unicorn');
//=> false
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
