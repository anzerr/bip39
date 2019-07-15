
const Wordlist = require('./wordlist.js');

let lang = {
	chineseSimplified: './json/chinese_simplified.json',
	english: './json/english.json',
	italian: './json/italian.json',
	korean: './json/korean.json',
	chineseTraditional: './json/chinese_traditional.json',
	french: './json/french.json',
	japanese: './json/japanese.json',
	spanish: './json/spanish.json'
};

let out = {};
for (let i in lang) {
	out[i] = new Wordlist(i, lang[i]);
}

module.exports = out;
