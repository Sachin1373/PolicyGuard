const mongoose = require('mongoose');

 const connectDB = async () => {
    try {
        const mongoURI = `${process.env.MONGOLAB_PROTOCOL}${process.env.MONGOLAB_URI}${process.env.MONGOLAB_DB_NAME}`;
        await mongoose.connect(mongoURI);
        console.log("DB CONNECTED!!")
    } catch (error) {
        console.log(error.message,"DB NOT CONNECTED")
    }
}

module.exports = connectDB;