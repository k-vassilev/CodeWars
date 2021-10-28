function XO(str) {
	let xCount = 0;
	let oCount = 0;
	for (const el of str) {
		if (el === "x" || el === "X") {
			xCount += 1;
		}
		if (el === "o" || el === "O") {
			oCount += 1;
		}
	}

	if (oCount === xCount) {
		return true;
	} else {
		return false;
	}
}

XO("xooxx");
