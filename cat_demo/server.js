// 1. IMPORT EXPRESS AND CREATE AN INSTANCE OF EXPRESS SERVER
const express = require("express")
const app = express()
const port = 8000

// 1.5 CONNECT MONGOOOSE TO THE MONGODB
require("./config/mongoose.config")

// 2. CONFIGURATION FOR YOUR EXPRESS SERVER
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. DEFINE ROUTES FOR YOUR EXPRESS SERVER
const catRoutes = require("./routes/cat.routes")
catRoutes(app)


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log("EXPRESS SERVER RUNNING ON PORT: " + port))