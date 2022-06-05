// 1. IMPORT EXPRESS AND CREATE AN INSTANCE OF EXPRESS SERVER
const express = require("express")
const app = express()
const port = 8000

// 2. CONFIGURATION FOR YOUR EXPRESS SERVER
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. DEFINE ROUTES FOR YOUR EXPRESS SERVER
const UserRoutes = require("./routes/user.routes")
UserRoutes(app)

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log("EXPRESS SERVER RUNNING ON PORT: " + port))