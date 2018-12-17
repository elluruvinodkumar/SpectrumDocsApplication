var express = require('express');
var router = express.Router();
var Resultfilter = require('../models/userTestResults');

router.get('urineresults/:userid', (req,res,next) => {
    console.log('req id...',req.params.userid);
    Resultfilter.filterResultsByStatus(req.params.userid,(result) => {
        res.json(result);
    })
})

module.exports = router;