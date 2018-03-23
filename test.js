import test from 'ava';
import m from '.';

test('matches non-ascii characters', t => {
	t.true(m.test('ø'));
	t.false(m.test('a'));
});
