// 1. IMPORT YOUR DEPENDENCIES
const express = require('express')
const cors = require("cors")
const app = express()
const port = 8000


// 1.5 CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")



// 2. CONFIGURE YOUR EXPRESS
app.use(cors()) // ALLOWS FOR REACT/EXPRESS TO COMMUNICATE
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// 3. ATTACH ROUTES TO YOUR EXPRESS SERVER
// require("./routes/book.route")(app)
const bookRoutes = require("./routes/book.route")
bookRoutes(app)


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER RUNING ON ${port}`))