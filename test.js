
const util = require('./src/util.js'),
	bip = require('./index.js'),
	assert = require('assert');

let account = [
	'present tackle buzz festival cup suffer kidney lucky term melody attract pause gesture volcano present win boat box alert surge royal weekend prevent twice',
	'AA1BA07E2A935BB15E9C25DF71503B50B617EB6A87DA18C35018ED2BCBF22A97'.toLocaleLowerCase()
];

assert.equal(bip.entropy.toMnemonic(account[1]).join(' '), account[0]);
assert.equal(bip.mnemonic.toEntropy(account[0]), account[1]);
assert.equal(bip.mnemonic.toEntropy(bip.entropy.toMnemonic(account[1]).join(' ')), account[1]);
assert.equal(util.checksum(Buffer.from(account[1], 'hex')), '01011010');
assert.equal(bip.wordlists.english.map[bip.wordlists.english.array[0]], 0);
