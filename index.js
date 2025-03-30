const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected");
    app.listen(port,()=> console.log(`server is running on ${port}`))
})
const port = process.env.PORT
app.get('/', (req, res) => res.send('Hello World!'))