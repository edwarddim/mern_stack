const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/subdoc_demo",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO subdoc_demo"))
.catch(err => console.log("ERROR: ", err))