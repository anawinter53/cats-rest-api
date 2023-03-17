const express = require('express');
const router = express.Router();
const cats = require('../controllers/cats');

router.get('/', cats.index);

router.get('/random', cats.random);

router.post('/', cats.create);

router.patch('/:id', cats.update);

router.delete('/', cats.del);

module.exports = router;

