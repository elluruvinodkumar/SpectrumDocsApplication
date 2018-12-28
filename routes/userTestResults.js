var express = require('express');
var router = express.Router();
var Result = require('../models/userTestResults');

router.get('/urineresults/:userid', function(req,res)  {

        Result.filterResultsByStatus(req.params.userid,(result) => {
            console.log("From Router : "+req.params.userid);

            res.json(result);
            console.log("From Router : "+result);
        });

});

module.exports = router;