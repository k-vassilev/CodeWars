function duplicateCount(text) {
	const counts = {};
	sampleArray = Array.from(text);
	sampleArray.forEach(function (x) {
		counts[x] = (counts[x] || 0) + 1;
	});
}

duplicateCount("aA11");
