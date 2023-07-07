const express = require('express');
const app = express();
const connectDB = require('./db');
const productRoutes = require('../app/routes/productRoutes');
const userRoutes = require('../app/routes/userRoutes');
const orderRoutes = require('../app/routes/orderRoutes');

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
