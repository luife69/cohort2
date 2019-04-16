
function loopWithForOf (arrayOfStaffObjects){
		let tempArray=[];

		for ( i of arrayOfStaffObjects) {

			tempArray.push(makeEmailObj(i))
			console.log("count");
		}


		

		
		return tempArray
	}


function loopWithForIn (arrayOfStaffObjects){
		let tempArray=[];
		let email="";
		// console.log("GREG 0",arrayOfStaffObjects);

		for (let i in arrayOfStaffObjects) {

			tempArray.push(arrayOfStaffObjects[i].fname+"."+arrayOfStaffObjects[i].lname+"@evolveu.ca")
			console.log("count");


		}
		return tempArray
	}

	

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);

console.log(emailForOf);

assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);





console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);

console.log(emailForIn);

assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);
