let Doctordb = require('../app/doctor');
let Personaldb = require('../app/personalinfo');

let Doctor = {

    findByEmail : (Doctor,callback) => {
            Doctordb.find({ email:Doctor.email},{username:1,_id:0}).exec()
            .then((result) => {
            
                var promises = result.map(function(obj){
                    console.log('promises calling');
                    let patients;
                    return Personaldb.findOne({username:obj.username}).then(function(results){
                       patients = results;
                       return patients;
                    })
                  })
                  
                  Promise.all(promises).then(function(results) {
                    callback({response:3, patientsList:results});
                })
            })
        
            .catch((error) => {
                callback(error);
            })
    }

};
module.exports = Doctor;