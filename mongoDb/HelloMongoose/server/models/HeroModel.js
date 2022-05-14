const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter name.']
	},
	alias: {
		type: String,
		required: [true, 'Please enter alias.']
	}
}, { timestamps: true });

const Hero = mongoose.model("Hero", HeroSchema);

