import React from 'react'
import '../App.js' ;
import Account from './Account'
import AccountApp from './AccountApp'
import AccountsController from './AccountsController'
import RenderedAccount from './RenderedAccount'



class AccountsControllerApp extends React.Component {

	
	constructor(){
		super();

	const accountsData = [
    {
        id: 1,
        balance:0,
        name:"Luis"
    },
    {
        id: 2,
        balance:10,
        name:"Linden"
    },
    {
        id: 3,
        balance:30,
        name:"Pedro"
    },
    ]



		this.accountsArray=[];

		this.state= {
	  		minBalance: 0,
	  		maxBalance: 0,
	  		totalBalance: 0,
	  		accountsArray: accountsData
	  	}




	 this.handleChange = this.handleChange.bind(this)

	}


	createNewCustomerAccount(balance,name){
		let newAccount = new Account(balance,name);
		// QA for name not being used
		this.accountsArray.push(newAccount);
		
	}


	deleteCustomerAccount(delTarget){
		let tempArray=this.accountsArray.filter( (value)=> value.accountName !== delTarget)
		this.accountsArray=tempArray

	}
	
//identify max and min travelling through array of accounts, comparing 
//current balances

	findMaxBalance(arr) {
  		// return Math.max.apply(null, arr.balance);
	  	let max=arr[0];
	  	
	  	arr.forEach((item) =>{if (max.balance <= item.balance) {max=item}})
	  	
	  	return max
	  }

	 findMinBalance(arr) {
  		// return Math.max.apply(null, arr.balance);
	  	let min=arr[0];
	  	
	  	arr.forEach((item) =>{if (min.balance >= item.balance) {min=item}})
	  	
	  	return min
	 }
	 findTotalBalance(arr) {
  		// return Math.max.apply(null, arr.balance);
	  	let total=0;
	  	arr.forEach((item) => {total = total + item.balance})	
	  	return total
	 }

	 handleChange(id) {
        this.setState(prevState => {
            const updatedLiveAccounts = prevState.accountsArray.map(liveAccount => {
                if (liveAccount.id === id) {
                    liveAccount.completed = !liveAccount.completed
                }
                return liveAccount
            })
            return {
                accountsArray: updatedLiveAccounts
            }
        })
    }



	render(){
		
		const liveAccounts = this.state.accountsArray.map(item => <RenderedAccount key={item.id} item={item} 
			handleChange={this.handleChange}/>)
           

		return (
			<div>
				<h1>Luis Greatest Account Controller App</h1>
				<p> Enter name and oppening balance of new accounts before pressing the buton below</p>
	            <input type="submit" value="Open New Account" onclick="openNew"></input>
	            <br/>
				<input id="openbalance" placeholder="Opening balance Amount"></input><br/>
				<input id="name" placeholder="Account Name"></input>
				<br/>
				<h2> Accounts Ledger</h2>
				<div className="liveAccounts">
                	{liveAccounts}			
				</div>
				<br/>
				<button onClick={()=> {this.selector('min')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt="descripcion del icono"
	                  />
	            </button>
	            <button onClick={()=> {this.selector('max')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/plus.png" 
	                    alt="descripcion del icono"
	                  />
	            </button>
	            <button onClick={()=> {this.selector('total')}}> 
	                  <img 
	                    src="https://img.icons8.com/windows/96/000000/minus.png" 
	                    alt="descripcion del icono"
	                  />
	            </button>
	            <div className="class3">
					<p>> Min{this.state.minBalance}$ </p>
				</div>
				<div>
				<AccountApp/>
				</div>
			</div>
		)
	}

}








export default AccountsControllerApp