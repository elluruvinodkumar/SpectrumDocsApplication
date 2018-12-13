var mongoose = require('../dbconnection');
var Schema = mongoose.Schema;
var LocationSchema = new Schema({

    username:{
        type:String,
        required:true,
		index:true,
        unique:true
    },
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true
    },
    specalization:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    addedtime:{
        type:String,
        required:true
    },
    loc: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d',      // create the geospatial index
        required: true
    },
    found: {
        type:String,
        required:true
    },
    doc_id:{
        type:String,
        required:true
    },
    invitation:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Doctor', LocationSchema);