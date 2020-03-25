const router = require("express").Router();
const plantsController = require("../../controllers/plantsController.js");
const passport = require("passport");

router
  .use(passport.authenticate("jwt", { session: false }))
  .route("/")
  .get(plantsController.findAll)
  .post(plantsController.create)
  .delete(plantsController.remove);

router
  .use(passport.authenticate("jwt", { session: false }))
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .post(plantsController.createAndSave);

module.exports = router;
