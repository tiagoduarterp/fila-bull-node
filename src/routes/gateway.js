const express = require("express");
const router  = express.Router();
const userRoutes = require('./user');

router.use("/user", userRoutes);
router.use("/healthz", (req, res, next) => {  return res.status(200).send("OK"); })

module.exports = router;