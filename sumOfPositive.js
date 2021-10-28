function positiveSum(arr) {
	let result = [];
	arr.forEach((el) => {
		if (el > 0) {
			result.push(el);
		}
	});
	let sum = 0;
	for (const num of result) {
		sum += num;
	}
	return sum;
}
positiveSum([1, -4, 7, 12]);
