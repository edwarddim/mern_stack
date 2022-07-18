// 1. IMPORT YOUR DEPENDENCIES
const express = require("express");
const cors = require("cors")

// 2. INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// 2.25 START YOUR MONGOOSE CONFIG
require("./config/mongoose.config");


// 2.5 SETUP MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// 3. DEFINE YOUR API ENDPOINTS
const userRoutes = require("./routes/user.routes")
userRoutes(app)


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log('Listening on port 8000'));