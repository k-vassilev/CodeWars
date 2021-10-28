function list(names) {
	let result = [];
	for (const obj of names) {
		result.push(obj.name);
	}
	let lastNames = result.slice(-2).join(" & ");

	if (result.length > 2) {
		let firstPart = result.slice(0, -2).join(", ");
		return(firstPart + ", " + lastNames);
	} else {
		return lastNames;
	}
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);
