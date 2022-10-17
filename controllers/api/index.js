const router = require("express").Router();

const userRoutes = require("./userRoutes");
const languageRoutes = require("./languageRoutes")

router.use("/users", userRoutes);
router.use("/languages", languageRoutes);

module.exports = router;