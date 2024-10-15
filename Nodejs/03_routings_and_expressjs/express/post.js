import express from "express";
import students from "./students.json" with {type : "json"};
import fs from "node:fs";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/students", (req, res) => {
  const obj = req.query;
  console.log(obj);
  const { name, grade } = obj;
  const convertedGrade = Number(grade);
  console.log(name, grade);
  if (name && convertedGrade) {
    const filteredStudents = students.filter(
      (student) =>
        student.name.includes(name) && student.grade === convertedGrade
    );
    res.status(200).send(filteredStudents);
  } else if (name) {
    const filteredStudents = students.filter((student) =>
      student.name.includes(name)
    );
    res.status(200).send(filteredStudents);
  } else if (convertedGrade) {
    const filteredStudents = students.filter(
      (student) => student.grade === convertedGrade
    );
    res.status(200).send(filteredStudents);
  }
  res.status(200).send(students);
});

app.post("/students", (req, res) => {
  const { body } = req;
  console.log(body);
  const newStudent = { id: students.length + 1, ...body };
  students.push(newStudent);
  fs.writeFile("./students.json", JSON.stringify(students), (err, data) =>
    console.log(err)
  );
  res.status(201).send(newStudent);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
