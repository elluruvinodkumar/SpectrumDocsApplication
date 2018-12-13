let Doctordb = require('../app/doctor');

let Doctor = {

    findByEmail : (Doctor,callback) => {
            Doctordb.find({ email:Doctor.email},{username:1,_id:0,__v:0 }).exec()
            .then((result) => {
                callback(result);
            })
            .catch((error) => {
                callback(error);
            }
    }

};
module.exports = Doctor;