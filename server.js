// server.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Access the MONGO_URI environment variable
const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  console.error('MONGO_URI is not set in environment variables');
  process.exit(1); // Exit process if MONGO_URI is not set
}

// Connect to MongoDB using mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
