var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Personalinfo', new Schema({
    username: {
        type:String,
        unique:true,
		index:true,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Height:{
        type:String,
        required:true
    },
    Weight:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    Blood_Group:{
        type:String,
        required:true
    },
    AddedTime:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
        required:true
    }
}));