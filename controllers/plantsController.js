const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Plant.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plant.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Plant.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createAndSave: function(req, res) {
    const userId = req.params.id;
    const { ...plantData } = req.body;
    db.Users.findById(userId).then(user => {
      const plant = new db.Plant(plantData);
      plant.save(function(err, plant) {
        if (err) throw err;
        user.plants.push(plant._id);
        user.save(function(err) {
          if (err) throw err;
          console.log("Plant saved to user!");
          return res.json(user);
        });
      });
    });
  },
  update: function(req, res) {
    db.Plant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    const { plantId, userId } = req.body;

    db.Plant.findById(plantId)
      .then(plant => plant.remove())
      .then(plant => {
        db.Users.findById(userId)
          .then(user => {
            const userPlants = user.plants;
            const remainingPlants = userPlants.filter(
              plant => plant.toString() !== plantId
            );

            user.plants = remainingPlants;
            user.save().catch(err => res.status(422).json(err));

            return res.json({ plant, user });
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
