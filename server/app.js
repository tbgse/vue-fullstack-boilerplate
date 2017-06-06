const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

// Using helmet for some added security
app.use(helmet());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
