const express = require("express");
const router = express.Router();
const sign = require('../controllers/sign');
router.post("/sign", sign.postSign);


module.exports = router;