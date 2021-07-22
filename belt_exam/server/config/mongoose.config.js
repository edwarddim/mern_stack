const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/belt_exam_MERN",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO BELT EXAM MERN"))
.catch(err => console.log("ERROR: ", err))