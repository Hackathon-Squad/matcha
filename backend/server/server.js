// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');
const users = require('./routes/users');
// import mongoose from 'mongoose';
// import mongodb from 'mongodb';
// import cors from 'cors';
// import users from './routes/users';

// require('dotenv').config();

const app = express();
const url = process.env.MONGODB_URI || 'mongodb+srv://faris:wheel@cluster0.y2bnz.mongodb.net';
const port = process.env.PORT || 4000; 

app.use(cors());
app.use(express.json());

app.use('/api/users', users);

mongoose.connect(url).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(port, () => {
    console.log(`Starting server on port 4000`);
  });