const asyncHandler = require('express-async-handler');
const USER = require('../models/userModel');
const GenerateToken = require('../config/GenerateToken');
const { VALIDATION_ERROR, UNAUTHORIZED } = require('../utils/constants');

//_________ SignIn : 
const SignIn = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(VALIDATION_ERROR);
      throw new Error("Email and password are required for sign in");
    }
    const user = await USER.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      res.status(UNAUTHORIZED);
      throw new Error("Invalid email or password");
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: GenerateToken(user._id),
    });
});

//_________ Signup :
const SignUp = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(VALIDATION_ERROR);
    throw new Error("All fields are required");
  }
  const userExists = await USER.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
  
  const user = await USER.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: GenerateToken(user._id),
    });
  } else {
    res.status(UNAUTHORIZED);
    throw new Error("Failed to create user");
  }
});

module.exports ={
  SignUp, 
  SignIn,
};
