const express = require("express")
const app = express()
const connectDB = require("./config/db.js")
const userRoute = require("./routes/userRoute.js")
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT




app.use("/api/v1/users",userRoute)


app.listen(PORT,async ()=>{
    console.log(`Server Started on port ${PORT}`)
    await connectDB()
})


// auth authoriza
// api security 
// token cookie 


// HTTPS REQUEST METHODS 
// GET - retrieve information from the server 
// POST - send information to the server 
// PATCH - edit information from the server & PUT 
// DELETE - delete information from the server
