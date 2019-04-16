
	// --- make me an email
// // 	Write the function that will make this code work.
// // */
console.log("----Make me an Email");

// // // ---- put function here ----
function makeEmail(arg1,arg2) {
let em=arg1+"."+arg2+"@evolveu.ca";
return em;
}


const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be."
	)
}

console.log("Larry:", larryEmail);
console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("kristin", "lee"));

// /*
	// --- make me a train
// 	Write the function that will make this code work.
// */
console.log("Make me a Train");

function makeTrain(arg1,arg2,arg3){
let mt = arg1+"."+arg2+"."+arg3
return mt
}
// ---- put function here ----
function makeTrain (f,s,t){
	train=f+"."+s+"."+t;
	return train;
};

const myTrain = makeTrain('one', 'two', 'three');
const shouldTrain = 'one.two.three';

if (myTrain != shouldTrain) {
	console.log("***** We have an error here *****",
		myTrain,
// 		" is not = ",
		shouldTrain,
		" and it should be."
	)
}

console.log("SB " ,shouldTrain, myTrain);

console.log("SB a.b.c:", makeTrain("a", "b", "c"));


// /*
	// --- add two numbers
// 	Write the function that will make this code work.
// */
console.log("Add numbers");

function addNumbers (num1,num2){
	return num1+num2
};
// // ---- put function here ----

const myAnswer1 = addNumbers(1,2);
const MyShouldBe1 = 3;

if (myAnswer1 != MyShouldBe1) {
	console.log("***** We have an error here *****",
		myAnswer1,
		" is not = ",
		MyShouldBe1,
		" and it should be."
		)
	};

console.log("SB 5" ,addNumbers(2,3));

console.log("SB 15" ,addNumbers(10,15));

console.log("SB 500" ,addNumbers(200,300));

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals (arg1,arg2){
// need to worl with numbers and or strings

	if (arg1===arg2){ 
		console.log("The values are the same OK", arg1);
		return true
	}

	console.log("The two values are not the same");
	console.log("P1", arg1);
	console.log("p2", arg2);
	return false
}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

	
// Write the function to format an email based on an array

// // Write the function after this comment ---
//  function makeEmailArr (array){
//  	console.log(array);

//  	return makeEmail
//  }

// // and before this comment ---

// const arrayLarry = ['larry', 'shumlich'];
// assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
// assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
// assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));
