const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        }
        )
        console.log("DB CONNECTED!!")
    } catch (error) {
        console.log(error.message,"DB NOT CONNECTED")
    }
}

module.exports = connectDB;