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

app.get('/users', async (req, res) => {
    const data = await User.find();
    res.send(data)
});

app.get('/loggedUser', async (req, res) => {
    console.log('Headers: ', req.headers)
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'myclientsecret')
        console.log('Decoded: ', decoded)
        const email = decoded.email
        const user = await User.findOne({
            email: email
        })
        console.log(user)
    return res.json({ status: 'ok', user })
    } catch(error) {
        res.json({ status: 'error', error: 'invalid token' })
    }
})

app.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
    } catch(err) {
        if (User.email === email) {
            res.json({ error: 'Duplicate email'})
        }
        res.json({ status: 'error', error: 'There was an error with your signup' })
    }
})

app.post('/login', async (req, res) => {
    console.log('Req Body: ', req.body)
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    
    if (user) {
        const token = jwt.sign(
            {
              name: user.firstName + user.lastName,
              email: user.email,
            }, 'myclientsecret')
        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.delete('/:id', async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, res.send(`Deleted ${req.params.id}`))
})

app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})
