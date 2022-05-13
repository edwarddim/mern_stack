const HeroController = require('../controllers/heroController');

module.exports = (app) => {
  app.get("/api/heroes", HeroController.findAll);
  app.post("/api/heroes", HeroController.create);
  app.get("/api/heroes/:id", HeroController.findOne);
  app.put("/api/heroes/:id", HeroController.update);
  app.delete("/api/heroes/:id", HeroController.delete);
};