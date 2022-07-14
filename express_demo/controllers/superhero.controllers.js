const superheroes = require("../Superjeroes")

// CREATE
module.exports.createSuperHero = (req,res) => {
    console.log("FORM DATA: ", req.body)
    res.json({
        id: 1,
        name: req.body.name,
        power:req.body.power,
        createAt:"123213",
        updatedAt:"123213"
    })
}

// READ ONE
module.exports.getOneHero = (req, res) => {
    console.log(req.params.hero_id)
    res.json("GET ONE USER")
}
    
// READ ALL
module.exports.getAllHeroes = (req, res) => {
    res.json(superheroes)
}


// UPDATE
module.exports.updateHero = (req, res) => {

    const {hero_id} = req.pararms;

    console.log(hero_id)
    res.json("UPDATING HERO")
}
// DELETE
module.exports.deleteHero = (req, res) => {
    res.json("DELETE ONE HER")
}