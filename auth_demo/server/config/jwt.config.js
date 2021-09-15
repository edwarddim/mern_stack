const jwt = require("jsonwebtoken");


// CREATE A FUNCTION THAT AUTHENTICATE AND WE CAN PLUG INTO ANY ROUTES WE WANT
// PROTECTED

console.log(process.env.SECRET_KEY)
module.exports.authenticate = (req, res, next) => {
  console.log("COOKIE: ",req.cookies)
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY , (err, payload) => {
    console.log(err)
    if (err) { 
      res.status(401).json({verified: false});
    } else {
      next();
    }
  });
}