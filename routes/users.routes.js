const express = require("express");
const router = express.Router();
const user = require("../controllers/users");

router.get("/", user.getIndex);

module.exports = router;
