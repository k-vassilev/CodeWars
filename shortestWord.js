function findShort(s) {
	let resultArr = [];
	let arr = s.split(" ");
	for (const el of arr) {
		resultArr.push(el.length);
	}
	return Math.min(...resultArr);
}
findShort("bitcoin take over the world maybe who knows perhaps");
