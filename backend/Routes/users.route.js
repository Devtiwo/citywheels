const express = require("express");
const router = express.Router();
const { createAccount } = require("../controllers/user.controller");

router.post("/signup", createAccount);

module.exports = router;