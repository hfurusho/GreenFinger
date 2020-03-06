const router = require("express").Router();
const plantsController = require("../../controllers/plantsController.js");

router
  .route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .post(plantsController.createAndSave)
  .delete(plantsController.remove);

module.exports = router;
