//returns -num

function makeNegative(num) {
	return -Math.abs(num);
  }

// function makeNegative(num) {
// 	if (num > 0 && num % 10 == 0) {
// 		let result = "-" + num;
// 		return parseInt(result);
// 	} else if (num > 0 && num % 10 != 0) {
// 		let result = "-" + num;
// 		return parseFloat(result);
// 	} else {
// 		return num;
// 	}
// }

makeNegative("1");
makeNegative("-1");
