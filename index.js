require('dotenv').config()

const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/twitter", (req, res)=>{
    res.send("srjdotcom")
})

app.get("/login", (req, res)=>{
    res.send("<h1>Please login at chai code </h1>")
})

app.get("/youtube", (req, res)=>{
    res.send("<h2>The SRJ Things</h2>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port ${port}`)
})