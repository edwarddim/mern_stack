// 1. IMPORT OUR DEPENDENCIES
const express = require("express")
const cors = require("cors")


// 2. INSTANTIATE OUR EXPRESS SERVER
const app = express()
const PORT = 8000

// 3. SETUP MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// 4. DEFINE OUR ENDPOINTS
app.get("/api", (request, response)=> {
    response.json({
        'name' : "Smith Smithster"
    })
})

app.get("/api/hello", (req, res) => {
    res.json("HELLO AGAIN")
})

app.get("/api/recipes/:recipe_id", (req, res) => {
    console.log(req.params)
    res.json(req.params.recipe_id)
})

app.post("/api", (req, res) => {
    console.log(req.body)
    res.json(req.body)
})


// 5. RUN YOUR EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))