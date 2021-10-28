function high(x) {
	let xArr = x.split(" ");
	let maxWord = [];
	for (const el of xArr) {
		let wordSum = 0;
		let wordProp = {
			word: el,
			wordmax: 0,
		};
		for (const char of el) {
			wordSum += char.charCodeAt() - 96;
		}
		if (wordSum > wordProp.wordmax) {
			wordProp.wordmax = wordSum;
		}
		maxWord.push(wordProp);
	}
	let max = Math.max.apply(Math, maxWord.map(function(o) { return o.wordmax; }));
	console.log(max);
}

high("man i need a taxi up to ubud");
