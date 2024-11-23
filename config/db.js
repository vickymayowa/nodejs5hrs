const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
    const mongoURI = process.env.MONGO_DB 
    const conn = await mongoose.connect(mongoURI)
    console.log(`MongoDb Connected Successfully ${conn.connection.host}`)
    } catch(error) {
        console.log(`MongoDb Connection Error`)
    }
}

module.exports = connectDB