'use strict';
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
