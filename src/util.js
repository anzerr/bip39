
const crypto = require('crypto');

class Util {

	toBinary(buf) {
		let o = '';
		for (let i = 0; i < buf.length; i++) {
			o += buf[i].toString(2).padStart(8, '0');
		}
		return o;
	}

	checksum(entropy) {
		let size = entropy.length / 32, part = Math.ceil(size);
		if (size <= 0) {
			return '';
		}
		const hash = crypto.createHash('sha256').update(entropy).digest();
		return hash.readUIntBE(0, part).toString(2).padStart(8, '0').slice(0, size * 8);
	}

}

module.exports = new Util();
