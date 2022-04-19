var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQlite database.");
    db.run(
      `CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName text, 
            description text,
            unitPrice INTEGER
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
          db.run(insert, [
            "White Basmathi Rice",
            "White Basmathi Rice imported from Pakistan. High-quality rice with extra fragrance. Organically grown.",
            200,
          ]);
        }
      }
    );
  }
});

module.exports = db;
