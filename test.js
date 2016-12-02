import test from 'ava';
import fn from './';

const truthy = {
	$async(t, names) {
		[].concat(names).forEach(async name => {
			t.is(await fn(name), true);
			t.true(await fn(name) === true);
			t.false(await fn(name) === false);
		});
	},
	$sync(t, names) {
		[].concat(names).forEach(name => {
			t.is(fn.sync(name), true);
			t.true(fn.sync(name) === true);
			t.false(fn.sync(name) === false);
		});
	}
};

const falsy = {
	$async(t, names) {
		[].concat(names).forEach(async name => {
			t.is(await fn(name), false);
			t.true(await fn(name) === false);
			t.false(await fn(name) === true);
		});
	},
	$sync(t, names) {
		[].concat(names).forEach(name => {
			t.is(fn.sync(name), false);
			t.true(fn.sync(name) === false);
			t.false(fn.sync(name) === true);
		});
	}
};

test('return undefined with no argument', async t => {
	const x = await fn();
	t.is(x, undefined);
	t.true(x === undefined);

	const y = fn.sync();
	t.is(y, undefined);
	t.true(y === undefined);
});

test('return true for bin exists', t => {
	truthy.$async(t, ['node', 'npm']);
	truthy.$sync(t, ['node', 'npm']);
});

test('return false for bin not exists', t => {
	falsy.$async(t, ['foo', 'bar']);
	falsy.$sync(t, ['foo', 'quux']);
});
