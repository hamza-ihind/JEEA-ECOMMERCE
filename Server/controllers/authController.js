// const asyncHandler = require('express-async-handler');
// const { Clerk } = require('@clerk/clerk-sdk-node');
// const GenerateToken = require('../config/GenerateToken');
// const { UNAUTHORIZED } = require('../utils/constants');

// const clerk = new Clerk({
//   apiKey: process.env.CLERK_SECRET_KEY,
// });

// // Sign In
// const SignIn = asyncHandler(async (req, res) => {
//   try {
//     const session = await clerk.getSession(req);

//     if (session) {
//       console.log('Sign-in successful:', session.user);
//       res.status(200).json({
//         _id: session.user.id,
//         email: session.user.email,
//         token: GenerateToken(session.user.id),
//       });
//     } else {
//       res.status(UNAUTHORIZED).json({ error: 'No active session' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Sign Up
// const SignUp = asyncHandler(async (req, res) => {
//   try {
//     const session = await clerk.getSession(req);

//     if (session) {
//       console.log('Sign-up successful:', session.user);
//       res.status(201).json({
//         _id: session.user.id,
//         email: session.user.email,
//         token: GenerateToken(session.user.id),
//       });
//     } else {
//       res.status(UNAUTHORIZED).json({ error: 'No active session' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = {
//   SignUp,
//   SignIn,
// };
