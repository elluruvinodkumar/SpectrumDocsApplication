var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('Mobile', new Schema({
    username: {
        type:String,
        unique:true,
		index:true,
        required:true
    },

    devices:{

        ios:[{
            deviceid: {
                type:String,
                required:true
            },
            deviceToken: {
                type:String,
                required:true
            },
            login: Boolean
        }],
        android:[{
            deviceid: {
                type:String,
                required:true
            },
            deviceToken: {
                type:String,
                required:true
            },
            login:Boolean
        }]

    }
}));