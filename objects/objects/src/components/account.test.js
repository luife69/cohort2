import Account from "./account";

//test for construct
test('Test constructor', () => {
	console.log('test for initital balance');
	const l = new Account(0,"linden");

	expect(l.balance).toBe(0);
	expect(l.accountName).toBe("linden");
	
	// test for balance
	expect(l.checkBalance()).toBe(0);
// test for w/d
	expect(l.withdraw(10)).toBe(-10);
//test for deposit
	expect(l.deposit(20)).toBe(10);
});
