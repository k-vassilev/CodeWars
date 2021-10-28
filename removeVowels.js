//replace all vowels
function disemvowel(str) {
	return str.replace(/[aeiouAEIOU]/gm, "");
}
disemvowel("This website is for losers LOL!");
