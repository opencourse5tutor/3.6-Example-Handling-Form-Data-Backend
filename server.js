var express = require("express");
var db = require("./database.js");
var md5 = require("md5");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    credentials: true,
    origin: "*",
  })
);

// Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  try {
    var sql = "select * from products";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json({
        message: "success",
        data: rows,
      });
    });
  } catch (E) {
    res.status(400).send(E);
  }
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {
  try {
    const { productName, description, unitPrice } = req.body;

    var sql =
      "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
    var params = [productName, description, unitPrice];
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      } else {
        res.status(200).json({
          message: "success",
          data: req.body,
          id: this.lastID,
        });
      }
    });
  } catch (E) {
    res.status(400).send(E);
  }
});
