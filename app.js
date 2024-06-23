const express = require('express');
const connectDB = require('./database/connect');
const tasks = require('./routes/tasks');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Test route
app.get('/hello', (req, res) => {
  res.send('task manager app');
});

// Task routes
app.use('/api/v1/tasks', tasks);

// Start the server
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
