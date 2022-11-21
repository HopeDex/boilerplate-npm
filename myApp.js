let express = require('express');
let app = express();
app.use("/public", express.static(__dirname + "/public"));

path = __dirname + "/views/index.html";

app.get('/', (req, res) => {
    res.sendFile(path)
  })

  app.get('/json', (req, res) => {
    res.json
  })
























 module.exports = app;
