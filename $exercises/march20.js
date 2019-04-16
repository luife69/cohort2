
let tempArray=[];
function loopWithEach(array){
			const result=[];
			array.forEach(function(value){
			email=makeEmailObj(value);
			tempArray.push(email);
			console.log("ddd",email, value);
			})
		return tempArray
	}


console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);

// console.log(emailWithEach);

assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);


function loopWithMap(array){
			
			result = array.map(function(value){
			makeEmailObj(value);
			return email;
			});

		return result
	}

function loopWithMap(array){
			
		return array.map(makeEmailObj);
	}

		

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);

// console.log(emailWithMap);

assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);


