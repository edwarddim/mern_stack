const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        validate: {
            validator : val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message : "Email must be a valid pattern"
        }
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    }
}, {timestamps: true})

// CREATE A TEMPORARY FILED IN OUR SCHEMA CALLED confirmPassword
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );
// WRITE OUT OUR OWN LOGIC FOR TESTING PASSOWRD AGAINST CONFIRMPASSWORD
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    // ANY OTHER VALIDATIONS THAT YOU WANT TO RUN
    next();
});

// USE BCRYPT TO HASH YOUR PASSWORD
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
  });


const User = mongoose.model("User", UserSchema)
module.exports = User