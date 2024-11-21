function firstWord(s) {
  // your code here
	if(!s){
		return '';
	}
	const initialWord = s.split(' ');
	let firstWord = initialWord[0];
	return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));