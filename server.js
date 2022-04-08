var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var products = require("./productData");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
  console.log(products);
});

