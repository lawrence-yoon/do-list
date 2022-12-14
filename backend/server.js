const express = require("express")
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    console.log("get request sent to '/'")
    res.send('root for backend taskboard')
})

app.listen(port, ()=>{
    console.log(`taskboard listening on port ${port}`)
})