const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/recipes_demo",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO RECIPES DEMO"))
.catch(err => console.log("ERROR: ", err))