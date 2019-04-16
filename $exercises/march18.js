// const data = {
// 	staff: [
// 		{fname:"Jane", lname:"Smith", balance:10},
// 		{fname:"Liam", lname:"Henry", balance:1000},
// 		{fname:"Emma", lname:"Jones", balance:1330},
// 		{fname:"Olivia", lname:"Notly", balance:310},
// 		{fname:"Noah", lname:"Ho", balance:503},
// 		{fname:"William", lname:"Lee", balance:520},
// 		{fname:"Benjamin", lname:"Amis", balance:150},
// 	],
// 	company: "EvolveU",
// 	city: "Calgary",
// 	prov: "Alberta"
// };

// Write the function after this comment ---


function loopStaff (arrayOfStaffObjects){
		tempArray=[];

		for (let i =0; i<=arrayOfStaffObjects.length - 1; i++) {

		// console.log("count");
		tempArray.push(makeEmailObj(data.staff[i]));
		}
		
	return tempArray;
	};


// and before this comment ---

console.log('-----loopStaff')

const staffEmail = loopStaff(data.staff);

assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

console.log(staffEmail);