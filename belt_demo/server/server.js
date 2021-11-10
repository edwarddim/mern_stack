// 1. IMPORT YOUR DEPENDENCIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

// 1.5 CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")

// 2. CONFIGURE YOUR EXPRESS
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


// 3. ATTACH ROUTES TO YOUR EXPRESS SERVER
const beltRoutes = require("./routes/betl.routes")
beltRoutes(app)


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER RUNING ON ${port}`))