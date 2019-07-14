
const wordlists = require('./wordlists.js'),
	entropy = require('./entropy.js'),
	util = require('./util.js');

class Mnemonic {

	constructor() {
		this._default = wordlists.map.english;
	}

	toEntropy(mnemonic = '', w) {
		const words = this.isValid(mnemonic.normalize('NFKD').split(' ')),
			wordlist = w || this._default;

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

	isValid(words) {
		if (!Array.isArray(words)) {
			throw new Error(`entropy is not a buffer give a "${typeof entropy}"`);
		}
		if (words.length % 3 !== 0) {
			throw new Error('invalid mnemonic length');
		}
		return words;
	}

}

module.exports = new Mnemonic();
