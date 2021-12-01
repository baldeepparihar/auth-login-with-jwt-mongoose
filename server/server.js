const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017');

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})
