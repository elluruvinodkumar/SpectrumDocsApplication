let Doctordb = require('../app/doctor');

let Doctor = {

    findByEmail : (Doctor,callback) => {
            Doctordb.find({ email:Doctor.email},{username:1,_id:0,_v:0 }).exec()
            .then((result) => {
                callback(result);
            })
    }

};
module.exports = Doctor;