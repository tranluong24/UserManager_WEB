const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const routes = require("../Routes/userRoute")

app.use(cors())
app.use(express.json())

require('dotenv').config()

mongoose
.connect(process.env.MONGODB_CONNECTION_URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(routes)

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`)
})