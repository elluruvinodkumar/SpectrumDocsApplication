var mongoose = require('../dbconnection');
var Schema = mongoose.Schema;
var RegDocSchema = new Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    hospitalName:{
        type:String,
        required:true
    },
    address:{
        type:[Number],
        index:'2d',
        required:true
    },
    website:{
        type:String,
        required:true
    },
    visitingTimings:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Registration',RegDocSchema);