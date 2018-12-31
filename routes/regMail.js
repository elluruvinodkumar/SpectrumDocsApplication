var express = require('express');
var router = express.Router();
var want = require('../models/regMail');

router.post('/verification',function (req,res) {

    want.addCustomer(req.body,(result)=>
    {
        res.json(result);
    });
});

module.exports = router;