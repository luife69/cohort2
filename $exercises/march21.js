// function to receive the same array and return the total of balances
// create a table of objects of people having name and age
// function to receive the above array and return the total of the ages
// function to receive the above array and return the average the ages

function toTotalBalances(array){
		console.log(array);
		const ta=array.map(getBalance);
		return ta.reduce(getSum);
		}

function getBalance(obj){
 	// console.log("inside make object function", objectLarry);
 		bn=obj.balance;
 		return bn;
 		}

function getSum(total, num) {
  		return total + num;
		}

function makeTableofStaffWithAges(array){
		data.staff.forEach(addAgeToArray);
		return array
		}

function addAgeToArray (obj,i){
		obj.age=ages[i];
		return obj
		}

function toTotalAges(array){
		console.log(array);
		const ta=array.map(getAge);
		return ta.reduce(getSum);
		}

function getAge(obj) {
  		an=obj.age;
 		return an;
}


function toAverageAges(array){

		return totalOfAges/array.length

}

 

console.log('-----staffBalanceSum')
const totalStaffBalance = toTotalBalances(data.staff);
console.log("total Balance is: ",totalStaffBalance)


console.log('-----tableOfStaffAges')
const ageInObject = makeTableofStaffWithAges(data.staff);
console.log("The staff ages are ",ageInObject)

console.log('-----totalAges')
const totalOfAges = toTotalAges(data.staff);
console.log("The total of all staff ages is ",totalOfAges)

console.log('-----averageAges')
const averageOfAges = toAverageAges(data.staff);
console.log("The average of all staff ages is ",averageOfAges.toFixed(1))

