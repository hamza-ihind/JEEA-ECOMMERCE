const jwt = require("jsonwebtoken");
const USER = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");


const AuthProtect = asyncHandler(async (req, res, next) => {
    
});
  
 module.exports = { AuthProtect };