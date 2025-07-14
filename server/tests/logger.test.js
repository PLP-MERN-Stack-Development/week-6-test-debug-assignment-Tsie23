const logger = require('../middleware/logger');

test('calls next and logs correctly', () => {
  const req = { method: 'GET', url: '/test' };
  const res = {};
  const next = jest.fn();

  console.log = jest.fn(); // mock console.log

  logger(req, res, next);

  expect(console.log).toHaveBeenCalledWith('GET /test');
  expect(next).toHaveBeenCalled();
});