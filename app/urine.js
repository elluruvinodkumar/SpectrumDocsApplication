
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Urine', new Schema({
    username:{
        type:String,
		index:true,
        required:true
    },
    member_id:{
        type:String,
        required:true
    },
    test_id:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    },
    testFactors:[{
        flag:{
            type:Boolean,
            required:true
        },
        healthReferenceRanges:{
            type:String,
            required:true
        },
        result:{
            type:String,
            required:true
        },
        testName:{
            type:String,
            require:true
        },
        unit:{
            type:String,
            required:true
        },
        value:{
            type:String,
            required:true
        }
    }],
    isShared:{
        type:Boolean,
        default:false
    },
    isFasting:{
        type:Boolean,
        required:true
    },
    testedTime:{
        type:String,
        required:true
    }
}));