// 1. IMPORT YOUR DEPENDENCIES
const express = require("express");
const { faker } = require("@faker-js/faker")
// import { faker } from '@faker-js/faker';

// 2. INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// 2.5 SETUP MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// 3. DEFINE YOUR API ENDPOINTS
app.get("/api/hello", (request, response) => { // GET localhost:8000/api/hello
    response.json({ message: "Hello" })
})


app.get("/api/users", (request, respsone) => {
    respsone.json([1, 2, 3, 4, 5, 6])
})

app.post("/api/users", (req, res) => {
    res.json({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    });
})

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log('Listening on port 8000'));