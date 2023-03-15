const express = require('express');
const cors = require('cors');

const home = require('./routes/home');
const cats = require('./routes/cats');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', home);
app.use('/cats', cats);

module.exports = app;
