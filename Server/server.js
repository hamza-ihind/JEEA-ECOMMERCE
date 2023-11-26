const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const clerkMiddleware = require('./middlewares/clerk');

const protectedRoutes = require('./routes/protected');
require('dotenv').config();
const pkg = require('@clerk/clerk-sdk-node');

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/protected', protectedRoutes); 

// Start the Express server
server.listen(5000, async () => {
    console.log('Server is listening on port 5000');
});
