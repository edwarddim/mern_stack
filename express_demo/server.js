// 1. IMPORT OUR DEPENDENCIES
const express = require("express")
const cors = require("cors")

// const { faker } = require("@faker-js/faker")


// 2. INSTANTIATE OUR EXPRESS SERVER
const app = express()
const PORT = 8000

// 3. SETUP MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// 4. CONNECTING THE EXPRESS SERVER TO THE ROUTES
const expressRoute = require('./routes/express.route.js')
expressRoute(app)


// 5. RUN YOUR EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))