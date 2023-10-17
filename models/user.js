const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,  // Note: In real-world scenarios, use bcrypt to hash the password
    email: String,
});

module.exports = mongoose.model('User', userSchema);
