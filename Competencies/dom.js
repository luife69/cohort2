// declarations
	// document.getElementById("idAddBtn").addEventListener("click", onAddBtnClick);
	var buttonShow=document.getElementById("idShowBtn");
	var buttonAdd=document.getElementById("idAddBtn");
	var input=document.getElementById ("newItemInput");
	var Ol=document.querySelector("Ol");
	const buttonFirstNewCard=document.getElementById("idAddFirstCardBtn");
// Functions
	function inputLength() {
			return input.value.length;
			console.log();
	}
	function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		Ol.appendChild(li);
		input.value = "";
	}
	function addListAfterClick() {
		if (inputLength() > 0) {
			createListElement();
	}}
	function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
			createListElement();
		}
	}
	function onShowBtnClick() {
		  console.log("inside Function 1",);
		  var x = Ol;
		  if (x.style.display === "none") {
		    x.style.display = "block";
		  } else {
		    x.style.display = "none";
  	}}

  	let counter = 1;

  	function onAddFirstCardBtnClick () {
  			console.log("inside function add Initial card");

  			const ref=document.getElementById("cardsField");
  			const createDiv=document.createElement("div");

  			ref.appendChild(createDiv);

  			createDiv.textContent = "card" + counter;  			
  			createDiv.className = "cardDesign";
			counter++

	  			const addBefore = document.createElement("button")
	  			addBefore.setAttribute("type","button")
	  			addBefore.textContent="Add Before"
	  			
	  			createDiv.appendChild(addBefore)
	  			addBefore.id="addBeforeClass";
	  		
	  			const addAfter = document.createElement("button")
	  			addAfter.setAttribute("type","button")
	  			addAfter.textContent="Add After"
	  			
	  			createDiv.appendChild(addAfter)
				addAfter.id="addAfterClass";
			
	  			const addDelete = document.createElement("button")
	  			addDelete.setAttribute("type","button")
	  			// addDelete.className="deleteBtnClass"
	  			addDelete.textContent="Delete Card"
			
	  			createDiv.appendChild(addDelete)
	  			addDelete.id="deleteCardClass";

  			return ref
  		}
  



function conditionalCardResponse(){
	console.log("inside the XXX",event.target.id);

	if (event.target.id === "addBeforeClass") {

		console.log ("inside conditional for Add before");
		
		const ref=document.getElementById("cardsField");
  		const createDiv=document.createElement("div");

  		ref.appendChild(createDiv);

  		createDiv.textContent = "card" + counter;  			
  		createDiv.className = "cardDesign";
		counter++;
			const addBefore = document.createElement("button")
  			addBefore.setAttribute("type","button")
  			addBefore.textContent="Add Before"
  			
  			createDiv.appendChild(addBefore)
  			addBefore.id="addBeforeClass";
  		
  			const addAfter = document.createElement("button")
  			addAfter.setAttribute("type","button")
  			addAfter.textContent="Add After"
  			
  			createDiv.appendChild(addAfter)
			addAfter.id="addAfterClass";
		
  			const addDelete = document.createElement("button")
  			addDelete.setAttribute("type","button")
  			// addDelete.className="deleteBtnClass"
  			addDelete.textContent="Delete Card"
		
  			createDiv.appendChild(addDelete)
  			addDelete.id="deleteCardClass";

  			
		cardsField.insertBefore(createDiv, event.target.parentElement);
	};
	if (event.target.id === "addAfterClass") {

		console.log ("inside conditional for Add after");

		const ref=document.getElementById("cardsField");
  		const createDiv=document.createElement("div");

  		ref.appendChild(createDiv);

  		createDiv.textContent = "card" + counter;  			
  		createDiv.className = "cardDesign";
		counter++;
			const addBefore = document.createElement("button")
  			addBefore.setAttribute("type","button")
  			addBefore.textContent="Add Before"
  			
  			createDiv.appendChild(addBefore)
  			addBefore.id="addBeforeClass";
  		
  			const addAfter = document.createElement("button")
  			addAfter.setAttribute("type","button")
  			addAfter.textContent="Add After"
  			
  			createDiv.appendChild(addAfter)
			addAfter.id="addAfterClass";
		
  			const addDelete = document.createElement("button")
  			addDelete.setAttribute("type","button")
  			// addDelete.className="deleteBtnClass"
  			addDelete.textContent="Delete Card"
		
  			createDiv.appendChild(addDelete)
  			addDelete.id="deleteCardClass";

			cardsField.insertBefore(createDiv, event.target.parentElement.nextSibling);
	};
	if (event.target.id === "deleteCardClass") {

		console.log ("inside conditional for delete", 
		event.target.parentElement.parentElement.removeChild(event.target.parentElement));
		
	};
	
}

// Scripts
// Basic DOM
	// buttonAdd.addEventListener("click", addListAfterClick);
	// input.addEventListener("keypress", addListAfterKeypress);
	// buttonShow.addEventListener("click", onShowBtnClick);
// Playing with Cards
	idAddFirstCardBtn.addEventListener("click", onAddFirstCardBtnClick);
	document.getElementById("cardsField").addEventListener("click", conditionalCardResponse)




	// if (test= "addAfterClass") {console.log ("inside conditional for Add After")};
	// if (test= "deleteCardClass") {console.log ("inside conditional for Delete")}