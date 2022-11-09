// IMPORT DEPENDENCIES
const express = require("express")
const cors = require("cors")

// INSTANTIATE EXPRESS SERVER
const app = express()
const PORT = 8000

// SETUP MIDDLEWARE
require("./config/mongoose.config")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// CONNECT ROUTES
const personRoutes = require("./routes/person.route")
personRoutes(app)


// START EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))