require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});