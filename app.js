require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});