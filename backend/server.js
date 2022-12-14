require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const connectDB = require("./config/db")
const Item = require('./models/itemModel')
const mongoose = require('mongoose')

connectDB()

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    console.log("get request sent to '/'")
    res.send('root for backend taskboard')
})

app.post('/api/items', (req,res)=>{
    console.log("post request sent to /api/items")
    console.log(req.body.test)
    const newItem = new Item({
        title: req.body.title,
        details: req.body.details,
        list: req.body.list
    })
    res.status(200).json(newItem)
})

app.listen(port, ()=>{
    console.log(`taskboard listening on port ${port}`)
})