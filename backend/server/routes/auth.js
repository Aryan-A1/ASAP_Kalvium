const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/validate-user', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ 
      success: true, 
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

module.exports = router;