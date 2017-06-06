const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('hello world! 123');
});

app.listen(8000, function() {
  console.log('server is listening on port 8000');
});
