'use strict';
var assert = require('assert');
var nonAscii = require('./index');

it('matches non-ascii characters', function () {
	assert(nonAscii.test('ø'));
	assert(!nonAscii.test('a'));
});
