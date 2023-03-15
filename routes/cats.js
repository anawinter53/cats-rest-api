const express = require('express');
const router = express.Router();
const cats = require('../controllers/cats');

router.get('/', cats.index)

module.exports = router;
