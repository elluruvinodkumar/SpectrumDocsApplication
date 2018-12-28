var mongoose = require('../dbconnection');
var Schema = mongoose.Schema;
var LocationSchema = new Schema({
    address: String,
	name: String,
    email:{type:String,index:true},
    phone:String,
    specialization:String,
    address:String,
    loc: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'      // create the geospatial index
    }
});
module.exports = mongoose.model('Hospital', LocationSchema);