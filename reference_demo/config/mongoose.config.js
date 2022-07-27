const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/reference_demo",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO reference_demo"))
.catch(err => console.log("ERROR: ", err))