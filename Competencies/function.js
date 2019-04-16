// console.log("Hello from function.js v1");

// function myFunction() {
// console.log("Hello from myFunction");
// }
// myFunction()



// // Adding Numbers 

// function my_add (a,b,c) { 
	
// 	return a+b+c
// 	console.log (my_add)
// }

// const ans12 = my_add(1,2,3);
// console.log('my_add answer 1:', ans12);
// console.log('my_add answer 2:',my_add(2,22,222));

// // create email address

function my_email(a,b) {
	return a+"."+b+"@evolve.ca"

};

function makeEmailObject(ovejota){
	return ovejota.fname+"."+ovejota.lname+"@evolveu.ca"
};


// const ans14 = my_email('jane','smith');
// console.log('my_email answer 1:', ans14);

// console.log('my_email answer 2:',my_email('bill','jones'));

// // 
// const numbers = [5,10,15,20];
// let sumInArray = numbers [0];

// var i;
// for (i = 0; i < numbers.length; i++) { 
//   sumInArray= sumInArray + numbers[i];
// }

// 	console.log ("sum Results:", sumInArray)

// 	// string search #4

// const string_array = [
// 	'this is a string',
// 	'that is also a string',
// 	'what about this',
// 	'what about that',
// ];

// const search1 = "this";
// const search2 = "is";

// const ans1 = look_for_string(string_array, search1);
// const ans2 = look_for_string(string_array, search2);

// function look_for_string(){
// 	for (i = 0; i < string_array.length; i++) 
// 	{ 
//   	if (string_array[i].includes(search1)) {
//   	console.log("condition Search 1 is meet", [i])
//   } 
//   	else {
//   		console.log("not meet",[i])		
//   		}
// 	}

// 	if (string_array[i].includes(search2)){
// 	console.log("condition Search 2 is meet", [i])
//   } else { console.log("not meet",[i])}
  			
// console.log("We found '", search1, "' in", ans1, "lines");
// console.log("We found '", search2, "' in", ans2, "lines");



// *	
// 	Write the function that will create this output:

// *** the two values are not the same:
//     p1--> a
//     p2--> b
// *** the two values are not the same:
//     p1--> 1
//     p2--> 2
// *** the two values are not the same:
//     p1--> 2
//     p2--> 2
// */

// // Write the function after this comment ---

// console.log ("wwwwww");

// and before this comment ---
function assertEquals (arg1,arg2){
	// need to worl with numbers and or strings
		console.log("inside assert equals");

	if (arg1===arg2){ 
		console.log("ok", arg1);
		return true
	}

	console.log("The two values are not the same");
	console.log("P1", arg1);
	console.log("p2", arg2);
	return false
};

	// console.log ("The two values are not the same")}



// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value")

// // MArch 18th
	const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---

function loopStaff(arreglo) {
	let a=[];
	for (i=0; i< arreglo.length; i++) {
			// console.log(arreglo [i]);
		a.push(makeEmailObject(arreglo [i]));
	}
	console.log(" quien eres?", a);
	return a
}

// and before this comment ---

console.log('-----loopStaff');
const staffEmail = loopStaff(data.staff);

// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

// March 19th



function loopWithForIn(arreglo) {
	let a=[];

	for (var indice in arreglo) {
		// console.log(arreglo[indice]);
		a.push(makeEmailObject(arreglo [indice]));

	} 
	return a
}

	// 	loopWithForIn(makeEmailObject(arreglo)){
	// console.log(arreglo [i]);
	// }
	// console.log(" quien eres?", a);
	// return a






console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);

function loopWithForOf(arr) {
	i=0;
	a=[]
	for ( data[0] of arr) {
    a.push(makeEmailObject(arr[i]));
     i++;
     // logs 3, 5, 7
	}// let a=[];
	return a
	// for (let indice of arreglo) {
	// 	console.log(arreglo);
	// 	a.push(makeEmailObject(arreglo.indice));

	// } 
	// return a
	}

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);


console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);


console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


// session 104

console.log('-----Function Options - - - - - - - -');

function simpleFunction(p1) {
    return `   simpleFunction: ${p1}   `;
}

const simpleArrow = (p1) => `   simpleArrow: ${p1}   `;

const anotherArrow = (p1) => {
    const a = 'do what ever is needed';
    const b = 'in this error function';
    return `   anotherArrow: ${p1}   `;
}

console.log(simpleFunction('what.'));

console.log(simpleArrow('what!'));

console.log(anotherArrow('what?'));

console.log(function () {
    return 'what ever is new!';

}());
