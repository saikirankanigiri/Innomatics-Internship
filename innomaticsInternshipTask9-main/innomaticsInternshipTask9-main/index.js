// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todosRoutes = require('./routes/todos');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Atlas connection string
const MONGO_URI = "mongodb+srv://mastanvalishaik803:Dp1LYSUxgx1q7pFM@cluster0.rthrw.mongodb.net/";

mongoose.connect(MONGO_URI)
  .then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});

// Routes
app.use('/todos', todosRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
