// 1. IMPORT AND INSTANTIATE EXPRESS SERVER
const express = require("express")
const app = express()
const port = 8000


// 1.5 CONNECT MONGOOSE TO MONGODB
require("./config/mongoose.config")


// 2. CONFIGURATION FOR EXPRESS SERVER
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. CONNECT MY EXPRESS SERVER TO MY ROUTES
const CatRoutes = require("./routes/cat.routes")
CatRoutes(app)

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log("EXPRESS SERVER RUNNING ON PORT: " + port))