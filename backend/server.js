require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose')
const connectDB = require("./config/db")
const Item = require('./models/itemModel')
const User = require('./models/userModel')

connectDB()

const auth = require("./middleware/auth")

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
    User.findOne({email:email})
        .then((user)=>{
            bcrypt.compare(password, user.password)
                .then((passwordCheck)=>{
                    if(!passwordCheck){
                        res.status(400).send({
                            message: "Incorrect Password",
                            error
                        })
                    }
                    const token = jwt.sign({
                        userId: user._id,
                        userEmail: user.email
                    },
                    process.env.JWT_SECRET,
                    {expiresIn: "24h"}
                    )
                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token
                    })
                })
                .catch((error)=>{
                    res.status(400).send({
                        mesage: "Incorrect Password",
                        error
                    })
                })
        })
        .catch((e)=>{
            res.status(404).send({
                message: "Email not found",
                e
            })
        })
    
})

app.get('/api/items', auth, (req,res)=>{
    res.json({message:"you are now authorized to get items"})
})

app.get('/api/items2', (req,res)=>{
    res.json({message:"this is the free access"})
})

app.listen(port, ()=>{
    console.log(`taskboard listening on port ${port}`)
})