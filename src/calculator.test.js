const { sum, sub, times, div } = require('./calculator');

test('add 5 to 4 must be 9', () => {
  expect(sum(5, 4)).toBe(9);
});

test('subtract 5 from 4 must be 1', () => {
  expect(sub(5, 4)).toBe(1);
});

test('5 times 4 must be 20', () => {
  expect(times(5, 4)).toBe(20);
});

test('20 divided 5 must be 4', () => {
  expect(div(20, 5)).toBe(4);
});
