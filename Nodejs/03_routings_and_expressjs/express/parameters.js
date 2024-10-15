import express from "express";
import students from "./students.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/students/:grade", (req, res) => {
  const grade = Number(req.params.grade);
  if (grade && grade <= 4) {
    res.status(200).send(students.filter((student) => student.grade === grade));
  }
  res.status(200).send(students);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
