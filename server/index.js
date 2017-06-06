const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hello world! 123');
});

app.listen(8000, function() {
  console.log('server is listening in port 3000');
});
