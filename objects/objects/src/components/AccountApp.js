import React, { Component } from 'react'
import Account from './Account.js'





class AccountApp extends React.Component{

	constructor(){
		super()
	  	
	  	this.state= {
	  		currentBal: 0,
	  	}

		this.testAccount = new Account(0, "LuisTest1")
		this.balance = this.testAccount.balance
		this.AccountObject= this.testAccount.accountName

	}	

	selector(event){
			let a=0
            a=parseInt(document.getElementById("input1").value);
            console.log("Button pressed: ",event,a);

            

            switch(event.toLowerCase()) {
	              case "deposit":
					console.log("in deposit",a);
					this.setState({currentBal: this.testAccount.deposit(a)})
	              break;
	              
	              case "withdraw": 	
					a=parseInt(document.getElementById("input1").value);
					console.log("in withdraw",a);
					this.setState({currentBal: this.testAccount.withdraw(a)})
	                console.log("in withdraw",a);
	              break;
	              
	              case "balance":
		          	console.log("in balance",a);
					this.setState({currentBal: this.testAccount.checkBalance(a)})
	                console.log("in withdraw",a);
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
					<h1>Luis Account Manager</h1>
				</div>
				<input id="input1" placeholder="enter transaction $'s"></input>
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
					<p>>Your current balance is {this.state.currentBal}$ </p>
				</div>
				
	      		<hr></hr>
	      		<div>Press a icon above</div>
			</div>
		)
	}
}
	
export default AccountApp