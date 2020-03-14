const router = require("express").Router();
const plantsController = require("../../controllers/plantsController.js");

router
  .route("/")
  .get(plantsController.findAll)
  .post(plantsController.create)
  .delete(plantsController.remove);

router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .post(plantsController.createAndSave);

module.exports = router;
