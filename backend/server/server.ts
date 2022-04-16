import express from 'express';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import cors from 'cors';
import users from './routes/users';

const app = express();
const url = `mongodb+srv://faris:wheel@cluster0.y2bnz.mongodb.net`;

app.use(cors());
app.use(express.json());

app.use('/api/users', users);

mongoose.connect(url).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(4000, () => {
    console.log(`Starting server on port 4000`);
  });