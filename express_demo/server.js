// 1. IMPORT EXPRESS AND CREATE AN INSTANCE OF EXPRESS SERVER
const express = require("express");
const app = express();
const port = 8000;

// 1.5 CONFIGURE OUR EXPRESS SERVER TO ACCEPT POST REQS
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// 2. CREATE URLS TO LISTEN TO AND DEFINE THE RESPONSE
const TestRoutes = require("./routes/test.routes")
TestRoutes(app)

// 3. RUN OUR EXPRESS SERVER
app.listen( port, () => console.log(`Listening on port: ${port}`) );