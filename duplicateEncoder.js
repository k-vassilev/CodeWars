function duplicateEncode(word){
	let initialArr = Array.from(word);
	let wordArr = [];
	for (const el of initialArr) {
		wordArr.push(el.toLowerCase());
	}
	
	let result = [];
	const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
	for (const char of wordArr) {
		if(countOccurrences(wordArr, char) !== 1){
			result.push(')');
		}else{
			result.push('(');
		}
	}
	console.log(result.join(''));
	
    
}
duplicateEncode("(( @");