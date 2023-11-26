const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  const clerkUser = req.clerkUser;
  if (clerkUser) {
    res.json({ profile: clerkUser });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;
