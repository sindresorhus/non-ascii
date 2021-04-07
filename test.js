import test from 'ava';
import nonAscii from './index.js';

test('matches non-ascii characters', t => {
	t.regex('ø', nonAscii);
	t.notRegex('a', nonAscii);
});
