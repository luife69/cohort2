
class Account {
	constructor(a,b){
  	this.balance=a;
  	this.accountName=b;
  	}
		checkBalance() {
				return this.balance;	
		}
		withdraw(amount){
				const newbal=this.balance-Number(amount)
				this.balance=newbal;
				return (this.balance)
		}
		
		deposit(amount){
				const newbal=this.balance+Number(amount)
				this.balance=newbal;
				return (this.balance)
		}
}  		
export default Account