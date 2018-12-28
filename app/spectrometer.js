var mongoose = require('../dbconnection');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Spectrometer', new Schema({
    username: {
        type:String,
		index:true,
        required:true
    },
    secureType:{
        type:String,
        required:true
    },
    Battery_percentage:{
        type:String,
        required:true
    },
    spectrometer_information:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    spectrometer_name:{
        type:String,
        required:true
    },
    last_sync:{
        type:String,
        required:true
    },
    spectrometer_version:{
        type:String,
        required:true
    }
}));