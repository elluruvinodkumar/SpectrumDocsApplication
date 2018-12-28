let UrineDb = require('../app/urine');

let Resultfilter  = {

    filterResultsByStatus : (userid,callback) => {
        UrineDb.find({username:userid,isShared:1},{_id:0,__v:0,username:0}).exec()
        .then((urineresults) => {
            console.log("From Model : "+userid);
            console.log('results...',urineresults);
            callback({response:'3',testResults:urineresults});
        })
    }
};
module.exports = Resultfilter ;