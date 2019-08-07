
const wordlists = require('./wordlists/index.js'),
	Wordlist = require('./wordlists/wordlist.js'),
	entropy = require('./entropy.js'),
	util = require('./util.js');

class Mnemonic {

	get default() {
		return this._default;
	}

	set default(d) {
		if (Array.isArray(d) && d instanceof Wordlist) {
			throw new Error('can\'t use that type for wordlist');
		}
		this._default = (d instanceof Wordlist) ? d.map : d;
	}

	constructor() {
		this._default = wordlists.english.map;
	}

	toEntropy(mnemonic = '', w) {
		const wordlist = w || this._default,
			words = this.isValid(Array.isArray(mnemonic) ? mnemonic : mnemonic.normalize('NFKD').split(' '), wordlist);

		const bits = words.map((x) => wordlist[x].toString(2).padStart(11, '0')).join('');
		const i = Math.floor(bits.length / 33) * 32,
			data = bits.slice(0, i),
			checksum = bits.slice(i);

		const output = entropy.isValid(Buffer.from(data.match(/(.{1,8})/g).map((x) => parseInt(x, 2))));
		if (util.checksum(output) !== checksum) {
			throw new Error('invalid checksum for mnemonic');
		}
		return output.toString('hex');
	}

	isValid(words, wordlist) {
		if (!Array.isArray(words)) {
			throw new Error(`entropy is not a buffer give a "${typeof entropy}"`);
		}
		if (words.length % 3 !== 0) {
			throw new Error('invalid mnemonic length');
		}
		if (typeof wordlist !== 'object') {
			throw new Error(`wordlist is not valid type "${typeof wordlist}"`);
		}
		for (let i in words) {
			if (typeof wordlist[words[i]] !== 'number') {
				throw new Error(`word ${words[i]} is missing in wordlist`);
			}
		}
		return words;
	}

}

module.exports = new Mnemonic();
