const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{
        type:String,required:[true,"must provide name"],
        trim:true,
        maxlength:[10,"Name not greate than 10 letters"]
    },
    phonenumber: {
        type:Number,required:[true,"must enter your number"],
        trim:true,
        minlength:[4,"please provide valid number"],
    }
})

module.exports = mongoose.model("User",user);
