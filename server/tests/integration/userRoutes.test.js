const request = require('supertest');
const express = require('express');
const routes = require('../../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('POST /api/register', () => {
  it('should register user', async () => {
    const res = await request(app).post('/api/register').send({ name: 'Jane' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toMatch(/Jane/);
  });

  it('should fail without name', async () => {
    const res = await request(app).post('/api/register').send({});
    expect(res.statusCode).toBe(400);
  });
});