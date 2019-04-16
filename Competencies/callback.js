console.log("hello")
console.log('-----Call Back - - -');

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
// // Create two new files in your evolveu/javascript directory: 
// callback.js, callback.html. Test that they are working.

// // Write a function called “myCallBackFunction” that will 
// receive two parameters: an array, and a function. How can we 
// write this one line at a time?
// // Write a second function called “myWorkerFunction” that 
// receives one parameter.  How do we test this one line at a time?
// // In the call to myCallBackFunction pass the two parameters
//  data.staff (from our previous exercises), and myWorkerFunction. 
//  ow can we test this one line at a time?
// // In myCallBackFunction add a loop for the array. How can we 
// test this one line at a time?
// // In the loop call myWorkerFunction passing the entry in 
// the array

function myCallBackFunction (arr, funcion){
	 console.log("in myCallBackFunction");
    console.log("   ar   --->", arr);
    console.log("   func --->", funcion);
    for(let i = 0; i < arr.length; i ++) {
        // console.log('==>', ar[i]);
        funcion(arr[i]);
    }    
}

function myWorkerFunction (par1){
		 console.log("in myWorkerFunction", par1);

}

function add5(par1) {
    console.log('add5', par1 + 5);
}
myCallBackFunction(data.staff, myWorkerFunction);

myCallBackFunction(['abc','bcd','cde'], myWorkerFunction);

const mmmm = [11,22,33,44];

myCallBackFunction(mmmm, add5);

myWorkerFunction('asdf');


