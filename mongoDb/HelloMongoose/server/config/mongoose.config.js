const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/heroDb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established connection to ${mongoose.connection.name}`))
	.catch(err => console.log(`Something went wrong: ${err}`));