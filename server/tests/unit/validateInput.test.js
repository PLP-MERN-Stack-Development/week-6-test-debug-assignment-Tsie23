const validateInput = require('../../src/utils/validateInput');

test('validates correct name input', () => {
  expect(validateInput('John')).toBe(true);
});

test('invalid when empty or non-string', () => {
  expect(validateInput('')).toBe(false);
  expect(validateInput(123)).toBe(false);
});