function alphabetPosition(text) {
	let result = [];
	const regex = /[a-z]/g;
	for (let char of text) {
		char = char.toLowerCase();
		if (char.match(regex)) {
			let elNum = char.charCodeAt() - 96;
			result.push(elNum);
		}
	}
	return result.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
