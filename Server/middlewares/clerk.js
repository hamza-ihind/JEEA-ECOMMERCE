const { Clerk } = require('@clerk/clerk-sdk-node');

const clerk = new Clerk({
  apiKey: process.env.CLERK_SECRET_KEY,
});

const clerkMiddleware = async (req, res, next) => {
  try {
    const session = await clerk.getSession(req);

    if (session) {
      req.clerkUser = session.user;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = clerkMiddleware;
