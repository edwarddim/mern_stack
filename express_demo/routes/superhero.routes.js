const superheroController = require("../controllers/superhero.controllers")

module.exports = (app) => {
    // CREATE
    app.post("/api/superheroes", superheroController.createSuperHero)
    // READ ALL
    app.get("/api/superheroes", superheroController.getAllHeroes)
    // READ ONE
    app.get("/api/superheroes/:hero_id", superheroController.getOneHero)

    // UPDATE
    app.put("/api/superheroes/:hero_id", superheroController.updateHero)
    // DELETE
    app.delete("/api/superheroes/:hero_id", superheroController.deleteHero)

}