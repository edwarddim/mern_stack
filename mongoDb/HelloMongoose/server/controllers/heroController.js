const Hero = require('../models/HeroModel')

module.exports.findAll = (req, res) => {
  Hero.find()
    .then(heroes => res.json({ heroes }))
    .catch(err => res.status(400).json({ err }));
};

module.exports.create = (req, res) => {
  Hero.create(req.body)
    .then(hero => res.json({ hero }))
    .catch(err => res.status(400).json({ err }));
};

module.exports.findOne = (req, res) => {
	Hero.findOne({ _id: req.params.id })
		.then(hero => res.json({ hero }))
		.catch(err => res.status(400).json({ err }));
};

module.exports.update = (req, res) => {
  // findOneAndUpdate takes three arguments, query, payload, boolean
  Hero.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(hero => res.json({ hero }))
    .catch(err => res.status(400).json({ err }));
};

module.exports.delete = (req, res) => {
  Hero.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.status(400).json({ err }));
};
