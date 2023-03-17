const express = require('express');
const router = express.Router();
const cats = require('../controllers/cats');

router.get('/', cats.index);

router.get('/random', cats.random);

router.get('/:id', cats.specific)

router.post('/', cats.create);

router.patch('/:id', cats.update);

router.delete('/:id', cats.del);

module.exports = router;

