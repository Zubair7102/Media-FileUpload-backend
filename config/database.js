const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("DB connection isd Successfull")
    })
    .catch((error) =>{
        console.log("DB is facing Connection Issues")
        console.log(error.message)
        process.exit(1);
    })
};

module.exports = dbConnect;