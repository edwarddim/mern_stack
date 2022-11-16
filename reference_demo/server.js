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
const messageRoutes = require("./routes/message.route")
messageRoutes(app)

// START EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))