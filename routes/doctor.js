var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

router.post('/',function(req,res){
    console.log('request body',req.body);
    Doctor.findByEmail(req.body,(result) => {
        res.json(result);
    });
});
module.exports=router;