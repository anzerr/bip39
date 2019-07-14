
let lang = {
	chineseSimplified: require('./wordlists/chinese_simplified.json'),
	english: require('./wordlists/english.json'),
	italian: require('./wordlists/italian.json'),
	korean: require('./wordlists/korean.json'),
	chineseTraditional: require('./wordlists/chinese_traditional.json'),
	french: require('./wordlists/french.json'),
	japanese: require('./wordlists/japanese.json'),
	spanish: require('./wordlists/spanish.json'),
};
let map = {};
for (let i in lang) {
	let o = {};
	for (let x in lang[i]) {
		o[lang[i][x]] = Number(x);
	}
	map[i] = o;
}

module.exports = {
	ref: lang,
	map: map
};
