
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---


function makeEmailArr(array){
	return(array[0]+"."+array[1]+"@evolveu.ca")
	}

// and before this comment ---
console.log('-----makeEmailArr')

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

