const dbConnect = require('./dbConnect')
const express = require('express')
const bcrypt = require('bcrypt')
const User = require('./db/userModel')

console.log('url', process.env.DB_URL)
const app = express();
const PORT = 3000;
app.post('/register', (req, res) => {
    //hash the password
    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.hashedPassword,
        })

        user.save().then((resullt) => {
            res.status(201).send({
                message: 'Success , User Created Successfully ',
                resullt,
            })
        }).catch(err => {
            res.status(500).send({
                message: "Error in the user ",
                err,
            })
        })
    }).catch( err => {
        res.status(500).send({
            message : "Password was not hashed Correctly"
        })
    })
})

//executing 
dbConnect()