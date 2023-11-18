const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);

require('dotenv').config();


// Middlewares
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
  }));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));




// Start the Express server
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});