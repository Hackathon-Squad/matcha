const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');

router.post('/createUser', async (req, res) => {
    const {email, first_name, last_name, img_url} = req.body

    const newUser = new User({
        email: email,
        first_name: first_name,
        last_name: last_name,
        img_url: img_url
    });
    await User.create(newUser);
    res.status(200).json(newUser);
});

router.post('/getUsers', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

module.exports = router;
