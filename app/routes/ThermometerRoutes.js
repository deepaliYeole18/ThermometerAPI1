var cors = require('cors');
module.exports = function(app) {

     
    var employees = require('../controllers/ThermometerController');
    var jwt    = require('jsonwebtoken');
    var express = require('express');
    var apiRoutes = express.Router();
  //   app.use(function(req, res, next) {
  //     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  //     res.header("Access-Control-Allow-Headers", "Accept,x-requested-with, authorization, Content-Type, Authorization, credential");
  //     res.header("Access-Control-Allow-Methods","*");
  //     res.header("Access-Control-Allow-Credentials","true");
  //   next();
  // });
  //   var whitelist = ['http://localhost:4200']
  //   var corsOptions = {
  //   origin: function (origin, callback) {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   }
  // } 
   
    
    // app.use(function(req, res, next) {
    //     // check header or url parameters or post parameters for token
    //     var token = req.body.token || req.query.token || req.headers['x-access-token'];
      
    //     // decode token
    //     if (token) {
      
    //       // verifies secret and checks exp
    //       jwt.verify(token, app.get('superSecret'),{ expiresIn: '1h' }, function(err, decoded) {      
    //         if (err) {
    //           return res.json({ success: false, message: 'Failed to authenticate token.' });    
    //         } else {
    //           // if everything is good, save to request for use in other routes
    //           req.decoded = decoded;
    //           next();
    //         }
    //       });
      
    //     } 
    //     else {
    //       // if there is no token
    //       // return an error
    //       return res.status(403).send({ 
    //           success: false, 
    //           message: 'No token provided.' 
    //       });
    //     }
    //   }); 

    // Retrieve all Notes
    app.get('/api/Employee/Allhermometer', employees.findAll);
    // Retrieve a single Note with noteId
}