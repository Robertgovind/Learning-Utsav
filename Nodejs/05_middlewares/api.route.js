import express from "express";
import data from "./test_data.json" with {type : "json"};
import fs from "node:fs";
import middlewares from './middlewares.js';

const router = express.Router();

// Inbuilt middlewares
router.use(express.urlencoded({ extended: false })); // for form type

// Route level Middlewares
router.use((req,res,next) => {
    console.log("Router level middleware");
    next();
});
router.use([middlewares.middleware1,middlewares.middleware2,middlewares.middleware3]);

router.get("/users", (req, res) => {
  return res.json(data);
});

router.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id == id);
  return res.json(user);
});

// Post route
router.post("/users", (req, res) => {
  const body = req.body;
  data.push({ ...body, id: data.length + 1 });
  fs.writeFile("./test_data.json", JSON.stringify(data), (err, data) =>
    console.log(err)
  );
  res.json({ status: "Success", id: data.length });
});
router.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id == id);
  data.filter((user) => user.id != id);
  res.json(user);
});
router.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const users = data.find((user) => user.id == id);
});

export default router;
