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

router.put('/updateUser', async (req, res) => {
    const {password, email} = req.body
    if (!password || !email) {
        res.status(400).json({ error: 'Invalid Input' });
    } else {
        const updatedUser = await User.findOneAndUpdate({email: email}, {password: password}, {new: true});
        res.status(200).json(updatedUser);
    }
});



module.exports = router;
