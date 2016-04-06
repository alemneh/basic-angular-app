'use strict';
module.exports = () => {

let express = require('express');
let app = express();
app.get('/', (req, res) => {
  res.send('Hello buddy');
  res.end();
})
app.listen(8080, () => {
  console.log('Server up on port 8080');
});

}
