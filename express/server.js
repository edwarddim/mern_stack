// Common JS
const express = require('express');
const app = express();
const superhero = require('./Superheroes');


app.get('/', (req, res) => {
  res.send('<h1>YO YO YO</h1>')
})

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/superheroes', (req, res) => {
  res.json({ msg: 'Getting all Heroes:' })
})

app.post('/api/superheroes', (req, res) => {
  res.json({ msg: `Creating a Hero: ${req.body.name}` })
})

app.get('/api/superheroes/:id', (req, res) => {
  res.json({ msg: `Getting Hero: ${req.params.id}` })
})

app.put('/api/superheroes/:id', (req, res) => {
  res.json({ msg: `Updating Hero: ${req.params.id}` })
})

app.delete('/api/superheroes/:id', (req, res) => {
  res.json({ msg: `Deleting Hero: ${req.params.id}` })
})

app.listen(5000, () => console.log('Listening on port 5000'));