const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');
// Add other routes/middleware as needed

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/posts', postRoutes);
// Add other routes/middleware as needed
app.use(errorHandler);

module.exports = app; 