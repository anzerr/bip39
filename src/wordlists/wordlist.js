
class Wordlist {

	constructor(name, path) {
		this.name = name;
		this.array = require(path);
		this.map = {};
		for (let i in this.array) {
			this.map[this.array[i]] = Number(i);
		}
	}

}

module.exports = Wordlist;
