// loading environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const chalk = require('chalk');
const app = express();

// Connect to Database
console.log('Connecting to database...');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log(chalk.red('Could not connect to database!'));
  console.error(chalk.red(err.message));
});
mongoose.connection.once('open', () => {
  console.log(chalk.green('Successfully connected to database.'));
});
// Using helmet for some added security
app.use(helmet());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('hello world! 123');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log(chalk.green(`server is listening on port ${port}.`));
});
