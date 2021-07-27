const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require('cors')
const port = 8000
const app = express()

require("./config/mongoose.config")

app.use(cookieParser())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./routes/user.route")(app)

app.listen(port , ()=>{
    console.log(`EXPRESS LISTENING ON ${port}`)
})