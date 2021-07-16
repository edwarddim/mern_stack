// 1. IMPORT EXPRESS AND CREATE AN EXPRESS SERVER
const express = require("express") // import express from "express"
const app = express() // INSTANTIATING AN EXPRESS SERVER
const port = 8000

require("./config/mongoose.config.js")

// 2. CONFIGURE YOUR EXPRESS SERVER
app.use( express.json() ); // ALLOWS JSON USAGE
app.use( express.urlencoded({ extended: true }) ); // ACCEPT POST REQUESTS
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
// 3. DEFINE ALL THE URLS FOR YOUR EXPRESS SERVER
app.get("/api/users", (request, respsonse) => {
    var dbInfo = users
    respsonse.json(dbInfo)
})

app.post("/api/users", (req, res) => {
    console.log(req.body)
    res.json({
        "message" : "This is the POST /api/users route"
    })
})
 

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`SERVER IS RUNNIG ON PORT ${port}`) )