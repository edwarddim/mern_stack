// 1. IMPORT EXPRESS AND CREATE AN EXPRESS SERVER
const express = require("express")
const app = express()
const port = 8000
// 1.5 CONNECT OUR MONGOOSE TO MONGODB
require("./config/mongoose.config")



// 2. CONFIGURE YOUR EXPRESS SERVER
app.use(express.json())
app.use( express.urlencoded({ extended: true }) )

// 3. DEFINE ALL THE URLS FOR YOUR EXPRESS SERVER
const catRoutes = require("./routes/cat.routes")
catRoutes(app)


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS RUNNING ON PORT ${port}`))