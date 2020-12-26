const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');

// Pagina Pricipal

router.get('/', adminControllers.getIndex);

module.exports = router;
