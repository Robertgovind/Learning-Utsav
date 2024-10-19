import express from "express";
import router from "./routes/users.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/users", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   if (id) {
//     connection.query(
//       `SELECT * FROM users WHERE id=${id}`,
//       (err, results, fields) => {
//         res.status(200).send(results);
//       }
//     );
//   } else {
//     res.status(400).send({ success: false });
//   }
// });

// app.post("/users/add", (req, res) => {
//   const { id, username, job_title } = req.body;
//   connection.query(
//     `INSERT INTO users(id, username, job_title) VALUES('${id}', '${username}', '${job_title}')`,
//     (err, results, fields) => {
//       if (err) throw err;

//       if (results.affectedRows == 1) {
//         res
//           .status(201)
//           .send({ success: true, message: "New user added to db" });
//       } else {
//         res
//           .status(400)
//           .send({ success: false, message: "New user not added to db" });
//       }
//     }
//   );
// });

// app.put("/users/update/:id", (req, res) => {
//   const {
//     body: { username, job_title },
//     params: { id },
//   } = req;
//   if (id) {
//     connection.query(
//       `UPDATE users SET username='${username}', job_title='${job_title}' WHERE id=${id}`,
//       (err, results, fields) => {
//         if (err) throw err;
//         res.status(200).send({ success: true });
//       }
//     );
//   } else {
//     res.status(400).send({ success: false });
//   }
// });

// app.delete("/users/delete/:id", (req, res) => {
//   const { id } = req.params;
//   if (id) {
//     connection.query(
//       `DELETE FROM users WHERE id=${id}`,
//       (err, results, fields) => {
//         if (results.affectedRows === 1) {
//           res.status(200).send({ success: true, message: "User deleted" });
//         }
//       }
//     );
//   } else {
//     res.status(400).send({ success: false, message: "Operation failed" });
//   }
// });
