require('dotenv').config();
const mongoose = require('mongoose');

const TEST_DB_URI = process.env.TEST_DB_URI || 'mongodb://localhost:27017/test-db';

mongoose.connect(TEST_DB_URI).then(() => {
  console.log('Connected to test DB');
  mongoose.connection.dropDatabase().then(() => {
    console.log('Test DB cleaned');
    process.exit(0);
  });
});