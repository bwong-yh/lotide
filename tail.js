const assertEqual = (actual, expected) => {
	const errorEmoji = '\u274C';
	const successEmoji = '\uD83D\uDFE2';
	let output;

	actual === expected
		? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
		: (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

	console.log(output);
};

const tail = (arr) => arr.slice(1);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const result2 = tail(["Goodbye"])
assertEqual(result2.length, 0); 
assertEqual(result2[0], "Goodbye"); 
assertEqual(result2[0], undefined); 

const result3 = tail([])
assertEqual(result3.length, 0); 
assertEqual(result2[0], "Something"); 
assertEqual(result2[0], undefined); 