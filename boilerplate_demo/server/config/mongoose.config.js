const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/boilerplate_demo",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("CONNECTED TO BOILERPLATE DEMO"))
.catch(err => console.log("ERROR: ", err))