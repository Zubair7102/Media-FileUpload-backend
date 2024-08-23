const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("DB connection is Successfull")
    })
    .catch((error) =>{
        console.log("DB is facing Connection Issues")
        console.log(error.message)
        process.exit(1);
    })
};

// module.exports = dbConnect;