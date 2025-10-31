const express = require("express");
const router = express.Router();
const { adminLogin, adminRegister } = require("../controllers/userController");

router.post("/register", adminRegister);
router.post("/login", adminLogin);

module.exports = router;
