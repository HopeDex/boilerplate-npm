let express = require('express');
let app = express();

path = __dirname + "/public/index.html";

app.get('/', (req, res) => {
    res.sendFile(path)
  })


























 module.exports = app;
