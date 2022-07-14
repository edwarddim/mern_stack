// 1. IMPORT YOUR DEPENDENCIES
const express = require("express");
const { faker } = require("@faker-js/faker")

// 2. INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// 2.5 SETUP MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// 3. DEFINE YOUR API ENDPOINTS
const superheroRoutes = require("./routes/superhero.routes")
superheroRoutes(app)

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log('Listening on port 8000'));