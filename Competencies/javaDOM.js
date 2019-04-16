const p=console.log;
p("h1 Tag", idH1);
// p("Document", document);
// p("h1log: ", idH1);

document.getElementById("idH1").addEventListener("click", onH1textclicked);


let b1="Hello World";
let b2="Hello Universe";

function onH1textclicked() {
	p("you pushed the text");

	if (idH1.textContent === b1) {
		idH1.textContent = b2;
	} else  {
		idH1.textContent = b1;
	}
  		p("IdH1", idH1.textContent)
  	
}
document.getElementById("idH2").addEventListener("mouseover", onH2TextMouseover);


let c1="Hello Canada";
let c2="Bonjour Canada";

function onH2TextMouseover() {
	p("you mouseovered the text");

	if (idH2.textContent === c1) {
		idH2.textContent = c2;
	} else  {
		idH2.textContent = c1;
	}
  		p("IdH2", idH2.textContent)
  	
}

document.getElementById("idPushButton").addEventListener("click", onButtonPush);

NumCount1=0

function onButtonPush() {
	p("you pushed the botton");

	let newNode = document.createElement("h3");
	let Text=document.createTextNode( "this is working" + NumCount1);
	newNode.appendChild (Text);
	document.body.appendChild (newNode);
	NumCount1++;

	}

	// x.insertBefore(newNode,y);

// var elemDiv = document.createElement('div');
// elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
// document.body.appendChild(elemDiv);
	
  	
