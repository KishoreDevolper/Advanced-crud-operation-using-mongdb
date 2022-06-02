const res = require("express/lib/response");
const mongoose = require("mongoose");

const connectdb = (url)=>{
    return mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=> console.log("Database Sucessfully Connected")).catch((err)=>res.send(err))
}

module.exports = connectdb