const express = require("express");
const router = express.Router();
const auth = require('../controllers/auth');
router.get("/login", auth.getLogin);
router.get("/", auth.getLogin);

module.exports = router;