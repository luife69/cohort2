
document.getElementById("btnTax").addEventListener("click", getInputValue);

// Defining arrays for the brackets 

const taxRates =[.15,.205,.26,.29,.33];
const taxThresholds =[0,47650,95259,147667,210371];
const taxBracketStep =[1,2,3,4,5];

let ptat=0
let variableLorraine=0
let t = 0;

function getInputValue(){
	// let income = 0;
	let income = Number(document.getElementById ("taxIncomeAmount").value);
	console.log("Transforming input to number");
	console.log ("Taxable Income", income);
	t=income;
	identifyBracket();
	return t;
}
 function identifyBracket (){

 	if (t <= taxThresholds[0]){
		console.log("Income Needs to be positive!");
		variableLorraine=0;
 	};
 	if (t > taxThresholds[0] && t< taxThresholds[1]){
		variableLorraine=1;
		console.log("Tax Bracket 1");
		calculateBracketTax(variableLorraine);
 	};
 	if (t > taxThresholds[1] && t< taxThresholds[2]){
		variableLorraine=2;
		console.log("Tax Bracket 2");
		console.log("ptat is:",ptat);
		calculateBracketTax(variableLorraine);
 	};
 	if (t >= taxThresholds[2] && t<taxThresholds[3]){
		variableLorraine=3;
		console.log("Tax Bracket 3");
		calculateBracketTax(variableLorraine);
  	};
 	if (t > taxThresholds[3] &&  t<= taxThresholds[4]){
	  	variableLorraine=4;
	  	console.log ("Tax Bracket 4");
	  	calculateBracketTax(variableLorraine);
  	};
 	if (t > taxThresholds [4]){
	  	variableLorraine=5;
	  	console.log ("Tax Bracket 5");
	  	calculateBracketTax(variableLorraine);
  	}
 }
 
function calculateBracketTax (x){
	taxinInBracket = ((t-taxThresholds[(x-1)])*taxRates[(x-1)])
	console.log("tax in this bracket is: ",taxinInBracket);
	console.log("variableLorraine", variableLorraine);

	switch(variableLorraine){
		case 2: 
			console.log("previous threshold:",taxThresholds[(x-1)]);
			console.log("current tax rate ",taxRates[1]);			
			PrevTax=taxThresholds[(x-1)]*taxRates[(x-1)];
			console.log("acumulated tax is ",PrevTax)
			deleteBtnClass.value=PrevTax+taxinInBracket; 	
			resultsNetIncome.value=t-deleteBtnClass.value

		case 3: 
			console.log("previous threshold:",taxThresholds[(x-1)]);
			console.log("current tax rate ",taxRates[x]);			
			PrevTax=taxThresholds[(x-1)]*taxRates[(x-1)];
			ptat=taxThresholds[1]*taxRates[0];
			newTax=ptat+taxinInBracket;
			console.log("acumulated tax is ",newTax)
			deleteBtnClass.value=ptat+taxinInBracket; 	
			resultsNetIncome.value=t-deleteBtnClass.value

		case 4: 
			console.log("previous threshold:",taxThresholds[(x-1)]);
			console.log("current tax rate ",taxRates[x]);			
			PrevTax=taxThresholds[(x-1)]*taxRates[(x-1)];
			ptat=taxThresholds[1]*taxRates[0];
			newTax=ptat+taxinInBracket;
			console.log("acumulated tax is ",newTax)
			deleteBtnClass.value=ptat+taxinInBracket; 	
			resultsNetIncome.value=t-deleteBtnClass.value
			
		case 5: 
			console.log("previous threshold:",taxThresholds[(x-1)]);
			console.log("current tax rate ",taxRates[x]);			
			PrevTax=taxThresholds[(x-1)]*taxRates[(x-1)];
			ptat=taxThresholds[1]*taxRates[0];
			newTax=ptat+taxinInBracket;
			console.log("acumulated tax is ",newTax)
			deleteBtnClass.value=ptat+taxinInBracket; 	
			resultsNetIncome.value=t-deleteBtnClass.value;
		
		default: console.log ("Negative or cero input is not permitted")
	}
	

}

// tutorial
	// const a=[1,2,10,4,5,6,-3, 9]
	// n=a.length;
	// console.log (n);
	// let ic=-3
	// function loopcompare (){

	// 	for (c = 0; c<n; c++) {

	// 	if (a[c] > ic) { ic= a[c]}
	// 	}
	// 	return ic;
	// }
	// console.log ("largest number is",loopcompare());

// if (income <= taxThresholds[0]) {
//   console.log("Taxable income is Cero or Negative");
//   TB0();
// }

//   else if (income > taxThresholds [0] && income <= taxThresholds [1]) {
//  	console.log ("Tax Bracket 1");
//  	TB1();
//  }

// 	else if (income > taxThresholds [1] && income <= taxThresholds [2]){
//     console.log ("Tax Bracket 2");
//      TB2();
//  }

// document.getElementById(resultsNetTax).value = income





  

 

// triggers the right function/ funtions 
// function TB1() {
// // This function will calculate y and calculate taxOfBracket amount, then substract from income to provide
// // netIncome

// }

// function TB2() {
// // This function will calculate y and calculate taxOfBracket amount, then substract from income to provide
// netIncome AND because it is in cecond bracket, will use info of tax from previous brackets 
// calculated with their tax rates and add them all together for total taxe amount and
// netIncome. This applies for all TB's past TB2

// if (income > taxThresholds [1] && income <= taxThresholds [2] ) {
// 	console.log ("bracket 2")

// } else {

// 	if (income > taxThresholds [1] && income <= taxThresholds [2] ) {
// 	console.log ("bracket 2")
// }

// else (income > taxThresholds [2] && income <= taxThresholds [3] ) {
// 	console.log ("bracket 2"))

// else (if (income > taxThresholds [3] && income <= taxThresholds [4] ) {
// 	console.log ("bracket 2"))
//   		}
//   else (if (income > taxThresholds [4]) {
// 	console.log ("bracket 2"))



// function determineTaxBracket() {
// 	console.log("Calculating Y");
// 		return totalTax;
// 	}

// function calculateTax() {
// 		console.log("Calculating Tax");
// 		return totalTax;
// 	}
// Working with Arrays

document.getElementById("arrayAdd").addEventListener("click", addElement);
document.getElementById("arrayShow").addEventListener("click", showArray);
document.getElementById("arrayTotal").addEventListener("click", sumInArray);
document.getElementById("arrayClear").addEventListener("click", clearArray);

let arrayExercise = [];

function addElement () {
	console.log("inside add element");
	console.log(arrayElement.value);
	arrayExercise.push(arrayElement.value);
	console.log (arrayExercise);
}

function showArray () { 
		console.log("inside show element");
		console.log ("The array is looking like this:", arrayExercise);
}


function sumInArray (){		
	console.log("inside sum element");
	let sumInArray = Number(arrayExercise[0]);

	var i;
	for (i = 1; i < (arrayExercise.length); i++) { 
	  sumInArray = sumInArray + Number(arrayExercise[i]);
	}
	console.log("Total array:", sumInArray);
}

function clearArray (){
		console.log("inside clear element");
		arrayExercise = [];
}

// need output function to export this value to the message area.



// Working Dictionaries

// var provinceLookUp = {
// 	AB: "Alberta",
// 	SK: "Saskatchewan",
// 	BC: "British Columbia"
// }


// function onProvinceLookup (){	
// 	console.log("inside onProvinceLookup function");
// 	console.log(provinceLookUp.AB);
// 	cv = 
//     document.getElementById("shortProvinceName".value = cv;
// }	

// document.getElementById("idBtnLookUpProvince").addEventListener("click", onProvinceLookup);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");

