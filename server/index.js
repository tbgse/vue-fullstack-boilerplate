// loading environment variables
require('dotenv').config();

const mongoose = require('mongoose');
const chalk = require('chalk');
const app = require('./app');
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

// Importing Mongoose models
require('./models/Example');

app.get('/', function(req, res) {
  res.send('hello world! 123');
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log(chalk.green(`server is listening on port ${port}.`));
});
