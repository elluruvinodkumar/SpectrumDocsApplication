var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

router.post('/doctor',function(req,res){
    
    Doctor.findByEmail(req.body,(result) => {
        res.json(result);
    });
});

module.exports=router;