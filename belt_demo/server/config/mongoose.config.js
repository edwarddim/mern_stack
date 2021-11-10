const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/belt_exam_1",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO BELT DEMO DB 1"))
.catch(err => console.log("ERROR: ", err))