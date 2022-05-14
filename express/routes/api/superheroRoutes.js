const express = require('express');
const superheroRouter = express.Router();
const superheroes = require('../../Superheroes');

superheroRouter.get('/', (req, res) => {
  res.json({ superheroes })
})

// check if they supplied both a name and an alias
// if one is missing respond with a 400 status
// send a json error message
// if they did supply both, create a new hero
// and add to "database"
// return the whole list with new hero

superheroRouter.post('/', (req, res) => {
  if(!req.body.name || !req.body.alias) {
    res.status(400).json({ msg: 'Please include a name and alias.' })
  } else {
    const newHero = {
      id: superheroes.length + 1,
      name: req.body.name,
      alias: req.body.alias
    }
    superheroes.push(newHero);
  }
  res.json({ superheroes });
})

superheroRouter.get('/:id', (req, res) => {
  const found = superheroes.some(hero => hero.id === parseInt(req.params.id))
  if (found) {
    const foundHero = superheroes.filter(hero => hero.id === parseInt(req.params.id))
    res.json({ foundHero })
  } else {
    res.status(400).json({ msg: `No hero exists with ID ${req.params.id}.` })
  }
})

superheroRouter.put('/:id', (req, res) => {
  const found = superheroes.some(hero => hero.id === parseInt(req.params.id))
  if (found) {
    superheroes.forEach(hero => {
      if (hero.id === parseInt(req.params.id)){
        hero.name = req.body.name ? req.body.name : hero.name;
        hero.alias = req.body.alias ? req.body.alias : hero.alias;
      }
    })
    const foundHero = superheroes.filter(hero => hero.id === parseInt(req.params.id))
    res.json({ foundHero })
  } else {
    res.status(400).json({ msg: `No hero exists with ID ${req.params.id}.` })
  }
})

superheroRouter.delete('/:id', (req, res) => {
  const found = superheroes.some(hero => hero.id === parseInt(req.params.id))
  if (found){
    superheroes.splice(req.params.id - 1, 1)
    res.json({ superheroes })
  } else {
    res.status(400).json({ msg: `No hero exists with ID ${req.params.id}.` })
  }
})

module.exports = superheroRouter;