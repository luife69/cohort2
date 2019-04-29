import AccountApp from "./AccountApp";

//test for construct


test('Test for constructor', () => {
	let t = new AccountApp();
	expect(t.state.currentBal).toBe(0);

})