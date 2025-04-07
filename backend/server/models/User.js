const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  validatedAt: { type: Date, default: Date.now },
  preferences: {
    favoriteTeam: { type: String, enum: ['avengers', 'villains'] }
  }
});

module.exports = mongoose.model('User', userSchema);