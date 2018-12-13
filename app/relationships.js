var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Relationship', new Schema({
    username: {
        type:String,
		index:true,
        required:true
    },
    member_id:{
        type:String,
        required:true
    },
    relationship:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    blood_group:{
        type:String,
        required:true
    },
    addedtime:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    isactive:{
        type:String,
        required:true
    }
}));