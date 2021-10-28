function isPangram(string) {
	let alphabet = [];
	let regex = /[a-z]/gm;
	for (let char of string) {
		char = char.toLowerCase();
		if (char.match(regex) && !alphabet.includes(char)) {
			alphabet.push(char);
		}
	}
	if (alphabet.length == 26) {
		return true;
	} else {
		return false;
	}
}
isPangram("The quick brown fox jumps over the lazy dog");
