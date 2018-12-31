let RegDoctordb = require('../app/RegDoctor');

let Register = {

    RegDoctor: (Doctor, callback) => {
        console.log('doctor..',Doctor);
        RegDoctordb.findOne({email:Doctor.email,password:Doctor.password}).exec()
            .then((result) => {
                console.log('result..',result);
                if(typeof result === null | typeof result === 'undefined' | result.length === 0){
                    let reguser = new RegDoctordb({
                        password: Doctor.password,
                        email: Doctor.email,
                        otp : Doctor.otp,
                        phone : Doctor.phone,
                        qualification : Doctor.qualification,
                        specialization : Doctor.specialization,
                        hospitalName : Doctor.hospitalName,
                        address : Doctor.address,
                        website : Doctor.website,
                        visitingTimings : Doctor.visitingTimings
                    });

                    reguser.save((success) => {
                        console.log('Success..',success);
                        callback({response:'3',message:'Doctor Registered Successfully!!!'});
                    })
                }else{
                    callback({response:'0',message:'Doctor Already Registered!!!....Please Login'});
                }
            })
    }
};
module.exports = Register;