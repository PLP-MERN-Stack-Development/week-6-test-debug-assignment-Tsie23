require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const performanceLogger = require('./middleware/performanceLogger');

const app = express();
app.use(express.json());
app.use(logger);
app.use(performanceLogger);
app.use('/api', userRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});