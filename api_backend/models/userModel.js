const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const userModel = mongoose.model("userModel",schema);

module.exports = userModel;