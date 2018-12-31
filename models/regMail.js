var nodemailer = require('nodemailer');
var validator = require('validator');
var multiline = require('multiline');

var doctor = require('../app/RegDoctor');

var Add= {
    addCustomer: (userParam, callback) => {
        var username1 = userParam.email;
        console.log(userParam);

            doctor.findOne({email:userParam.email,password:userParam.password}).exec().then((result) => {

                        var text = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                        for (var i = 0; i < 4; i++) {
                            text += possible.charAt(Math.floor(Math.random() * possible.length));
                        }
                        console.log('pin:' + text);
                        if (validator.isEmail(username1)) {

                            var str = multiline(function () {/*
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Basic Bootstrap Template</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional Bootstrap theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<style>
  .background
  {
  position: absolute;
  width: 700px;
  height: 800px;
  z-index: 15;
  top: 10%;
  left: 25%;
  bottom: 30%;
  margin: -100px 0 0 -150px;
  padding-left: 5%;
  padding-top: 10%;
  padding-bottom: 0 none;
  background-image: url(http://54.234.239.245/image/background.png);
  }
  .img{
    width:100%;
    max-width:600px;
}
.box {
  border-radius: 25px;
  position: absolute;
  width: 600px;
  height: 600px;
  z-index: 15;
  top: 30%;
  left: 30%;
  bottom: 30%;
  margin: -100px 0 0 -150px;
  background: #fff;
}
.button {
    border-radius: 20px;
    background-color: #6888F5;
   height: 15px;
   width: 90px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.inner
{
    border: 1px solid #000000;
    border-radius: 25px;
  width: 580px;
  height: 580px;
  margin: 0 auto;
  margin-top: 15px;
}
.image{
  margin-right: 15px;
  float: right;
}
        .image2{
            margin-left: 20px;
            float:left;
            margin-top: -60px;
        }
.textplace
{
  margin-left: 25px;
  margin-top:150px;
}
.textno{
  margin-left: 25px;
  margin-top:50px;
}
.center
 {
  margin-top:100px;
   background-color:  #6888F5;
    padding: 1px;
}
.copyryt
{
  margin-top: 5px;
  margin-left: 240px;
    width: 60%;
}
.copyryttt
{
  margin-top: 5px;
  margin-left: 230px;
    width: 60%;
}
.clipimg{
  margin-left: 40px;
  margin-top: 40px;
}
.copyryted
{
  margin-left: 230px;
}
</style>
</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <body background=="http://54.234.239.245/image/background.png">
  <div class="background">
	<div class="box">
		<div class="inner">
      <div class="image">
      <img src="http://54.234.239.245/image/logo.png" >
      </div>
      <div class="textplace">
        <h3>
          Dear %m
        </h3>
        <P>
               We received a Request that you forgot your Password of Your Spectrum account.Use this One Time Password (OTP) toreset your password.
        </P>
        <div class="button">%s</div>
        </div>
        <div class="textno">If You Didn't mean to Reset your Password ,then you can just ignore this Your Password will not change</div>
        <div class="center"></div>
        <div class="copyryt">
         Copyright  &copy; 2017
        </div>
        <div class="copyryttt">www.Spectrum.com</div>
    <div class="copyryted">
<font color="blue">All Rights Reserved</font>
  </div>
 <div>
            </div>
        </div>
      </div>
    </div>
</body>
</html>
							 */
                            });
                            var html = str.replace("%s", text);
                            var html1 = html.replace("%m", username1);

                            var transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: 'teamaaro.tech@gmail.com',
                                    pass: 'abcd1234@#'
                                }
                            });
                            var mailOptions = {
                                from: 'teamaaro.tech@gmail.com',
                                to: userParam.email,
                                subject: 'OTP Verification',
                                html: html1
                            };

                            var myobj = new doctor({
                                email: username1,
                                password: userParam.password,
                                otp: text,
                                phone: userParam.phone,
                                qualification: userParam.qualification,
                                specialization: userParam.specialization,
                                hospitalName:userParam.hospitalName,
                                address:userParam.address,
                                website:userParam.website,
                                visitingTimings: userParam.visitingTimings
                            });
                            myobj.save(function(err){
                                if(err){
                                    console.log(err);
                                    callback({response:'0',message:err});
                                }else{

                                    var r = {response: '3', message: 'Your Registration Was Successfull...!'};
                                    callback(r);
                                    transporter.sendMail(mailOptions, function (error, info) {
                                        if (error) {
                                            console.log(error);

                                        } else {
                                            console.log('Email sent: ' + info.response);

                                        }
                                    });

                                }
                            });

                        }
                    });

                }

};
module.exports=Add;