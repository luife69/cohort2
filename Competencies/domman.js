console.log('working', "It's Working!!")

function createElement(message) {
	let newDiv = document.createElement('div');
	newDiv.textContent = message;
	newDiv.className = "clpanel";
	return newDiv; 
}

function onButtonPushed(e) {
	console.log("inside on button pushed", "you are in");
	newDiv = createElement("HI");
	document.body.appendChild(newDiv);
	console.log('sssss', e.target);		//console logging target click (where the button was clicked on this page)
	// e.target.textContent = "Bang"		// 
}

document.body.addEventListener("click", onButtonPushed);
document.addEventListener("click", onButtonPushed);


