/*

	--- functions and braces nightmare 

*/
console.log("Hello from exercises");

const array1 = [3,1];

// write the function that will make this work

console.log("Should Be: 1, 3:", orderArray(array1));
	

console.log("Should Be: 1, 5:", orderArray([5,1]));
	

console.log("Should Be: 10, 20:", orderArray([20,10]));


function orderArray (xyz) {
	if (xyz[0]< xyz[1]) {
	return [xyz[0],xyz[1]];
	} else {
		return [xyz[1],xyz[0]];
	}	
}


	
	