require('dotenv').config()
let express = require('express');
let app = express();
app.use("/public", express.static(__dirname + "/public"));

path = __dirname + "/views/index.html";

app.get('/', (req, res) => {
    res.sendFile(path)
  })

  app.get('/json', (req, res) => {
    var response;
    if (process.env.MESSAGE_STYLE === "uppercase") {
      response = "HELLO JSON"
    }else{
      response = "hello json"
    }
    res.json({
      message: response
    })
    
  })
























 module.exports = app;
