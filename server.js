var express = require("express");
var db = require("./database.js");
var app = express();

// Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {

});
