const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "drug-management-app",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Berhasil terhubung ke Drug Management App - DestBreak");
});

app.get("/api/transactions", (req, res) => {
  const sql = "SELECT * FROM transactions";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/api/items", (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/api/depos", (req, res) => {
  const sql = "SELECT * FROM depos";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/api/drugs", (req, res) => {
  const sql = "SELECT * FROM drugs";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post("/api/transactions", (req, res) => {
  const { id, date, depoOrigin, depoDestination, description, totalPrice } = req.body;
  const sql =
    "INSERT INTO transactions (id, date, depoOrigin, depoDestination, description, totalPrice) VALUES (?,?,?,?,?,?)";
  db.query(sql, [id, date, depoOrigin, depoDestination, description, totalPrice], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ id, date, depoOrigin, depoDestination, description, totalPrice });
  });
});

app.post("/api/items", (req, res) => {
  const { transactionId, code, name, unit, qty, price, totalPrice } = req.body;
  const sql = "INSERT INTO items (transactionId, code, name, unit, qty, price, totalPrice) VALUES (?,?,?,?,?,?,?)";
  db.query(sql, [transactionId, code, name, unit, qty, price, totalPrice], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ transactionId, code, name, unit, qty, price, totalPrice });
  });
});

app.delete("/api/transactions/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM transactions WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: "Data deleted" });
  });
});

app.delete("/api/items/:code", (req, res) => {
  const { code } = req.params;
  const sql = "DELETE FROM items WHERE code = ?";
  db.query(sql, [code], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ message: "Data deleted" });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
