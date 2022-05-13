const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const heroRoutes = require('./server/routes/heroRoutes');

heroRoutes(app);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
