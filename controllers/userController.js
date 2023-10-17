const User = require('../models/user');

exports.registerUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password, // Remember to hash in real-world apps!
        email: req.body.email,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add login, profile update, etc. here
