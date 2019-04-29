import Accounts from "./Accounts";


test('Test for New account', () => {
	
	const a = new Accounts();

	expect(a.length).toBe(0);

})