const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./src/routes/userRouter');
const ideaRouter = require('./src/routes/ideaRouter');
const adminRouter = require('./src/routes/adminRouter');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/idea-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Routes
app.use('/api/users', userRouter);
app.use('/api', ideaRouter);
app.use('/api/admin', adminRouter);

// Default route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Idea App!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
