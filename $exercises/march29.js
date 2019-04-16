// dependencies


// Write a reduce function to total the balances. 

		function condition2(total,obj){
			return total+obj.balance;
			 
		}


console.log("--------totalbalanceswithreduce");

console.log(data.staff);

let tot = data.staff.reduce(condition2, 0);
console.log(tot);
assertEquals(tot, 3823);
