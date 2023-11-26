const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const clerkMiddleware = require('./middlewares/clerk');

const protectedRoutes = require('./routes/protected');
require('dotenv').config();
const pkg = require('@clerk/clerk-sdk-node');
const clerkClient = pkg.default;

// Middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(clerkMiddleware);

// Routes
app.use('/protected', protectedRoutes); // for testing

// Start the Express server
server.listen(5000, async () => {
    console.log('Server is listening on port 5000');

    try {
        const list = await clerkClient.users.getUserList();
        console.log(list);
    } catch (error) {
        console.error(error);
    }
});
