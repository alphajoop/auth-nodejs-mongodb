const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/authRouter');

const port = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB is  connected successfully');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: ['https://mern-authentication-delta.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());

app.use('/', authRoute);
