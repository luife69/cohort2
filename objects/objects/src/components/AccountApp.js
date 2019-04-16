import React, { Component } from 'react';
import Account from './Account.js'


class AccountApp extends React.Component{

	constructor(){
		super()
	  	this.state={
	  		balance:0,
	  	    accountName:"testAccount",
	  	}
	  	let testAccount = new Account(0,"Luis")
	}	


	selector(event){
			let a=0
            console.log("Button pressed: ",event);

            a=parseInt(document.getElementById("input1"))

            switch(event.toLowerCase()) {
	              case "deposit":
	                console.log("in deposit",a);
	                console.log("test");
	              break;
	              case "withdraw":
	                console.log("in withdraw",a);
	                console.log("test");
	              break;
	              case "balance":
		          	console.log("in balance",a);
	                console.log("test");
		          break;
	              default:
            }
    }
    handleClick(){

    }

	render(){

		return(
			<div className="class1">
				<div>
					<h1>hello from AccountAPP</h1>
				</div>
				<input id=" sinput1" placeholder="enter transaction $'s" onClick={this.handleClick()}></input>
				<div className="class2">
					<button onClick={()=> {this.selector('deposit')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
	                <button onClick={()=> {this.selector('withdraw')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/minus.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
	                <button onClick={()=> {this.selector('balance')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/0000000/question-mark.png" 
	                    alt="descripcion del icono"
	                  />
	                </button>
				</div>
				<div className="class3">
					<p>{this.state.balance} </p>
				</div>
				<button onClick={()=> {this.selector('exit')}}> 
		      		<img 
		              className="App-operator"
		              src="https://img.icons8.com/windows/96/0000000/login-rounded-up.png" 
		              alt="descripcion del icono"
		            />
		            "To return to Luis Apps, refresh browser"
	      		</button>
			</div>
		)
	}
}	
export default AccountApp