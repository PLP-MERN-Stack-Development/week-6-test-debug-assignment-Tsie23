const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
// Add other routes/middleware as needed

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
// Add other routes/middleware as needed
app.use(errorHandler);

module.exports = app; 