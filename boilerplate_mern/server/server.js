// 1. IMPORT DEPENDENCIES
const express = require('express')
const cors = require('cors')
const port = 8000
const app = express()

// 1.5 CONNECT TO MONGODB
require("./config/mongoose.config")

// 2. CONFIGURE EXPRESS
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. CONNECT ROUTES


// 4. START EXPRESS SERVER
app.listen(port , ()=>{
    console.log(`EXPRESS LISTENING ON ${port}`)
})