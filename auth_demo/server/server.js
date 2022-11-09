const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")


const app = express()
const port = 8000


require("./config/mongoose.config")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))

// CONNECT ROUTES
const userRoutes = require("./routes/user.route")
userRoutes(app)



app.listen(port , () => console.log(`EXPRESS LISTENING ON ${port}`))