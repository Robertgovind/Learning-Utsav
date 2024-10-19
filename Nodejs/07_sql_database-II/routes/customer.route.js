import express, { application, json } from "express";
import connection from "../config/connection.js";

const router = express.Router();

router.get("/", (req, res) => {
  var sql = `SELECT * FROM customers`;
  connection.query(sql, (err, result, fields) => {
    res.send(result);
  });
});

// Insert into table
router.post("/add", (req, res) => {
  const { name, address } = req.body;
  var sql = `INSERT INTO customers (name, address) VALUES (?, ?)`;
  connection.query(sql, [name, address], (err, result, fields) => {
    if (result.affectedRows == 1) {
      res.status(201).send({ message: "success" });
    } else {
      res.status(400).send({ message: "failed" });
    }
  });
});

// DELETE
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  var sql = `DELETE FROM customers WHERE id=?`;
  connection.query(sql, id, (err, result, fields) => {
    if (result.affectedRows == 1) {
      res.status(200).send({ message: "successful" });
    } else {
      res.status(400).send({ message: "failed" });
    }
  });
});

//UPDATE
router.put("/update/:id", (req, res) => {
  const { name, address } = req.body;
  const { id } = req.params;
  connection.query(
    `UPDATE customers SET name=?, address=? WHERE id=?`,
    [name, address, id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows == 1) {
        res.status(100).send({ message: "successful" });
      } else {
        res.status(400).send({ message: "failed" });
      }
    }
  );
});

export default router;
