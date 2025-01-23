const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Simple Route
app.get('/', (req, res) => {
	res.send('Task Management API is running!');});

//Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);});
