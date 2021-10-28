function validatePIN(pin) {
	let result = [];
	for (const el of pin) {
		if (!el.match(/[0-9]/gm)) {
			result.push(el);
		}
	}
	if ((pin.length === 4 || pin.length === 6) && result.length === 0) {
		return true;
	} else {
		return false;
	}
}

validatePIN("25685h");

// function validatePIN(pin) {
// 	return /^(\d{4}|\d{6})$/.test(pin)
//   }
