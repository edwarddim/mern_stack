// IMPORT CONTROLLER
const superHeroController = require("../controllers/superhero.controllers")

module.exports = (app) => {
    app.get("/api/test", superHeroController.test)
    app.post("/api/superhero", superHeroController.createHero)
    app.get("/api/superhero", superHeroController.getAllSuperheroes)
    app.get("/api/superhero/:hero_id", superHeroController.getOneSuperhero)
    app.put("/api/superhero/:hero_id", superHeroController.updateSuperhero)
    app.delete("/api/superhero/:hero_id", superHeroController.deleteSuperhero)
}