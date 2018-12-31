var express = require('express');
var router = express.Router();
var want = require('../models/registerDoctor');

router.post('/register',function (req,res) {

    want.RegDoctor(req.body,(result)=>
        {
            res.json(result);
        });
    });

module.exports = router;