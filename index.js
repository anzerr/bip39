
const wordlists = require('./src/wordlists.js');

let word = {};
for (let i in wordlists.map) {
	word[i] = {
		array: wordlists.array[i],
		map: wordlists.map[i]
	};
}

module.exports = {
	entropy: require('./src/entropy.js'),
	mnemonic: require('./src/mnemonic.js'),
	wordlists: word
};
