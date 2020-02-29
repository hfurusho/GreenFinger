const router = require("express").Router();
const plantRoutes = require("./plants");
const userRoutes = require("./users");

//  routes
router.use("/plants", plantRoutes);
router.use("/users", userRoutes);

module.exports = router;
