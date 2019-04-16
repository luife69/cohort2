// Using one of the callback functions we researched in the last exercise (but may have not used previously) create a new array for balances >= 1000. 
// Copy and paste the following code. 

function condition (value){
		if (value.balance>=1000) {
			console.log(value);
			return true}
		else{
			return false
		}
		}// if value>1000 {
		// return true}
		// else {
		// return false
		// }
	
// return value>1000



let largeBalances = data.staff.filter(condition)
// console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

