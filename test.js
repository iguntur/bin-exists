import test from 'ava';
import fn from './';

test('async - return true', async t => {
	t.true(await fn('node'));
	t.true(await fn('npm'));
});

test('async - return false', async t => {
	t.false(await fn('foo'));
	t.false(await fn('bar'));
});

test('sync - return true', t => {
	t.true(fn.sync('node'));
	t.true(fn.sync('npm'));
});

test('sync - return false', t => {
	t.false(fn.sync('foo'));
	t.false(fn.sync('bar'));
});
