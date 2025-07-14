module.exports = function validateInput(name) {
  return typeof name === 'string' && name.trim().length > 0;
};