function DNAStrand(dna) {
	let output = [];
	dnaArr = Array.from(dna);
	for (const el of dnaArr) {
		let char = el;
		if (el === "A") {
			char = "T";
		}
		if (el === "T") {
			char = "A";
		}
		if (el === "C") {
			char = "G";
		}
		if (el === "G") {
			char = "C";
		}
		output.push(char);
	}
	return output.join("");
}

DNAStrand("ATTGC");
