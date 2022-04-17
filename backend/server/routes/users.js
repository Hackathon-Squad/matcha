// import express from 'express';
// import User from '../../models/userModel';

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

router.get('/getUsers/:id', async (req, res) => {
    const users = await User.find({ _id: { $nin: req.params.id }});
    res.status(200).json(users);
});

router.get('/getSwipedUsers/:id', async (req, res) => {
    let myUser = { _id: ObjectId( req.params.id )};
    const users = await myUser.find({ _id: { $in: myUser.swiped_right }});
    res.status(200).json(users);
});

router.get('/getNotSwiped/:id', async (req, res) => {
    let myUser = { _id: ObjectId( req.params.id )};
    const users = await  myUser.find({ _id: { $nin: myUser.swiped }});
    res.status(200).json(users);
})

router.put('/updateCoffees/:id', async (req, res) => {
    let myUser = { _id: ObjectId( req.params.id )};
    myUser.coffee_pref = req.body.coffee_pref;
    const users = await myUser.save();
    res.status(200).json(users);
});

router.post('/updateShops/:id', async (req, res) => {
    let myUser = { _id: ObjectId( req.params.id )};
    myUser.shop_pref = req.body.shop_pref;
    const users = await myUser.save();
    res.status(200).json(users);
});


module.exports = router;
