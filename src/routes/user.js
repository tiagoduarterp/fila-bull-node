const express        = require("express");
const router         = express.Router();
const userController = require("../controllers/userController");

router.post('/teste', userController.user)

module.exports = router;