const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/belt_exam_one",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("CONNECTED TO BELT EXAM DB"))
.catch(err => console.log("ERROR: ", err))