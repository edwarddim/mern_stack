const jwt = require("jsonwebtoken");

const secret = "KEEP THIS SECRET A SECRET"
module.exports.secretKey = secret;

// CREATE A FUNCTION THAT AUTHENTICATE AND WE CAN PLUG INTO ANY ROUTES WE WANT PROTECTED
module.exports.authenticate = (req, res, next) => {
  console.log("COOKIE: ",req.cookies)
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}