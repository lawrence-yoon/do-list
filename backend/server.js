require('dotenv').config()
const bcrypt = require("bcrypt")
const { response } = require('express')
const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose')
const connectDB = require("./config/db")
const Item = require('./models/itemModel')
const User = require('./models/userModel')

connectDB()

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    console.log("get request sent to '/'")
    res.send('root for backend taskboard')
})

//Create Item
app.post('/api/items', (req,res)=>{
    console.log("post request sent to /api/items")
    console.log(req.body)
    const item = new Item({
        title: req.body.title,
        details: req.body.details,
        list: req.body.list
    })
    item.save()
    res.status(200).json(item)
})
//Create/Register User
app.post('/api/users/register', (req,res)=>{
    console.log("post request sent to /api/users/register")
    console.log(req.body)
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword)=>{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            user.save()
                .then((result)=>{
                    res.status(201).send({
                        message: "User created successfully",
                        result
                    })
                })
                .catch((error)=>{
                    res.status(500).send({
                        message: "Error creating user",
                        error
                    })
                })
        })
        .catch((e)=>{
            res.status(500).send({
                message:"Password was not hashed successfully",
                e
            })
        })
})

//Login User
app.post('/api/users/login', (req,res)=>{
    console.log("post request sent to /api/users/login")
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email}, function(err, foundUser){
        if (err) {
            console.log(err)
        }   else {
            if(foundUser){
                if(foundUser.password === password){
                    console.log(`You are now logged in, ${foundUser.name}`)
                    res.send(`You are now logged in, ${foundUser.name}`)
                }   else{
                    console.log('wrong password')
                    res.send('wrong password')
                }
            }   else{
                console.log("wrong user / user does not exist")
                res.send("wrong user / user does not exist")
            }
        }
    })
    
})

app.listen(port, ()=>{
    console.log(`taskboard listening on port ${port}`)
})