//solution to use
function filter_list(l) {
	return l.filter(Number.isInteger);
}

//my solution

// function filter_list(l) {
// 	let result = [];
// 	l.forEach((el) => {
// 		if (typeof el === "number") {
// 			result.push(el);
// 		}
// 	});
// 	return result;
// }

filter_list([1, 2, "a", "b"]);
