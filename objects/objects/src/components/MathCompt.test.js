import MathComp from "./MathComp";


it('renders without crashing', () => {
  const div = document.app.createElement('div');
  ReactDOM.render(<MathComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// test('input was number', () => {
// 	expect(MathComp.output).toBe(Int);
// });

// test('Test for operator switch', (sum) => {
// 	expect(operator.case).toBe("sum");
// });

// test('test for render, initial state', () => {
// test('test for change of state', () => {
// test('correct operation results (this was tested in math.test.js)', () => {
// test('test button and image loaded', () => {
// test('test that the image in the buttom is the one intended', () => {
// test('test for imputs different that numbers', () => {
// test('test for negatives, zeroes, limits, strings ', () => {
// test('test for suicide', () => {
