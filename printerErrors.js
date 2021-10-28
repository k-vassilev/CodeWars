function printerError(s) {
	let length = s.length;
	let errorsCount = 0;
	for (const color of s) {
		if (!color.match(/[a-m]/gm)) {
			errorsCount += 1;
		}
	}
	return `${errorsCount}/${length}`;
}
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");
