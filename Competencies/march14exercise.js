
/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

function makeEmailObj (obj){
 	fn=obj.fname;
 	ln=obj.lname;
 	return fn+"."+ln+"@evolveu.ca"	
}

// and before this comment ---

objectLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objectLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));