// Common JS
const express = require('express');
const app = express();
const superheroRouter = require('./routes/api/superheroRoutes');  




// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('<h1>YO YO YO</h1>')
})

app.use('/api/superheroes', superheroRouter);

app.listen(5000, () => console.log('Listening on port 5000'));