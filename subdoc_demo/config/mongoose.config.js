const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/messageboard_db",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO MESSAGEBOARD DB"))
.catch(err => console.log("ERROR: ", err))