// import express from "express";
// import client from "./connection.js";
// import { MongoClient } from "mongodb";

// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT || 3000;
// //let client;

// app.post("/students/add", async (req, res) => {
//   const data = await client
//     .db("WRC")
//     .collection("students")
//     .insertOne(req.body);
//   res.send(data);
// });
// app.get("/students", async (req, res) => {
//   const data = client.db("WRC").collection("students").find();
//   res.send(JSON.stringify(data));
// });

// app.listen(PORT, async () => {
//   console.log(`Server is running on port : ${PORT}`);
//   try {
//     //client = new MongoClient("mongodb://localhost:27017/WRC");
//     console.log("connected to database");
//   } catch (err) {
//     console.log(err);
//   }
// });
import express, { response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import teacherModel from "./models/teacherModel.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/teachers/add", async (req, res) => {
  try {
    const response = await teacherModel.create(req.body);
    res.send(response);
  } catch (err) {
    res.send(err.message);
  }
});
app.get("/teachers/search/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await teacherModel.findOne({ _id: id });
    res.send(response);
  } catch (err) {
    res.send(err.message);
  }
});
app.put("/teachers/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await teacherModel.findOne({ _id: id });
    response = { ...req.body };
    response.save();
    res.send(response);
  } catch (err) {
    res.send(err.message);
  }
});
app.delete("/teachers/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await teacherModel.deleteOne({ _id: id });
    res.send(response);
  } catch (err) {
    res.send(err.message);
  }
});
app.listen(PORT, async () => {
  try {
    console.log(`server is running on port : ${PORT}`);
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
});
