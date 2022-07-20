const jwt = require("jsonwebtoken");


module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, "SECRET_KEY" , (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
}


module.exports.adminAuthenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, "SUPER_DUPER_SECRET_KEY" , (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
}