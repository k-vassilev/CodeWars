function deleteNth(arr, n) {
	let result = [];

	for (const el of arr) {
		const counts = {};

		if (result.length === 0) {
			result.push(el);
		} else if (!result.includes(el)) {
			result.push(el);
		} else {
			for (const num of result) {
				counts[num] = counts[num] ? counts[num] + 1 : 1;
			}

			if (counts[el] < n) {
				result.push(el);
			}
		}
	}
	return result;
}

deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
