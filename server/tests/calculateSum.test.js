const calculateSum = require('../utils/calculateSum');

test('adds two numbers', () => {
  expect(calculateSum(3, 5)).toBe(8);
});