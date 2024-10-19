import express from "express";
import connection from "../config/connection.js";

const router = express.Router();

// Using prepared statements

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    connection.query(
      `SELECT * FROM users WHERE id=?`,
      [id],
      (err, results, fields) => {
        res.status(200).send(results);
      }
    );
  } else {
    res.status(400).send({ success: false });
  }
});

router.post("/add", (req, res) => {
  const { id, username, job_title } = req.body;
  connection.query(
    `INSERT INTO users(id, username, job_title) VALUES(?, ?, ?)`,
    [id, username, job_title],
    (err, results, fields) => {
      if (err) throw err;

      if (results.affectedRows == 1) {
        res
          .status(201)
          .send({ success: true, message: "New user added to db" });
      } else {
        res
          .status(400)
          .send({ success: false, message: "New user not added to db" });
      }
    }
  );
});

router.put("/update/:id", (req, res) => {
  const {
    body: { username, job_title },
    params: { id },
  } = req;
  if (id) {
    connection.query(
      `UPDATE users SET username=?, job_title=? WHERE id=?`,
      [username, job_title, id],
      (err, results, fields) => {
        if (err) throw err;
        res.status(200).send({ success: true });
      }
    );
  } else {
    res.status(400).send({ success: false });
  }
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    connection.query(
      `DELETE FROM users WHERE id=?`,
      [id],
      (err, results, fields) => {
        if (results.affectedRows === 1) {
          res.status(200).send({ success: true, message: "User deleted" });
        }
      }
    );
  } else {
    res.status(400).send({ success: false, message: "Operation failed" });
  }
});

export default router;
