
const wordlists = require('./wordlists.js'),
	util = require('./util.js');

class Entropy {

	constructor() {
		this._default = wordlists.ref.english;
	}

	toMnemonic(e, w) {
		const entropy = this.isValid(Buffer.isBuffer(e) ? e : Buffer.from(e, 'hex')),
			wordlist = w || this._default;

		return `${util.toBinary(entropy)}${util.checksum(entropy)}`
			.match(/(.{1,11})/g)
			.map((x) => wordlist[parseInt(x, 2)]);
	}

	isValid(entropy) {
		if (!Buffer.isBuffer(entropy)) {
			throw new Error(`entropy is not a buffer give a "${typeof entropy}"`);
		}
		if (entropy.length < 16 || entropy.length > 32 || entropy.length % 4 !== 0) {
			throw new TypeError('Invalid entropy');
		}
		return entropy;
	}

}

module.exports = new Entropy();
