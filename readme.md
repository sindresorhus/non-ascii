# non-ascii

> Regular expression for matching non-ASCII characters

## Install

```
$ npm install non-ascii
```

## Usage

```js
import nonAscii from 'non-ascii';

nonAscii.test('hællæ');
//=> true

nonAscii.test('unicorn');
//=> false
```
