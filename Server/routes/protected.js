const express = require('express');
const router = express.Router();


// protected routes here : the one here is for testing purposes
router.get('/profile', (req, res) => {
    const clerkUser = req.clerkUser;
    if (clerkUser) {
      res.json({ profile: clerkUser });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  });
  

module.exports = router