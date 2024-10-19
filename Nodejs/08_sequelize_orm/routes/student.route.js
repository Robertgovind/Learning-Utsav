import express, { application, json } from "express";
import connection from "../config/connection.js";
import studentModel from "../models/studentModel.js";
import { where } from "sequelize";
import { Op } from "sequelize";

const router = express.Router();

// Select data from table
router.get("/", async (req, res) => {
  try {
    const data = await studentModel.findAll();
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});
router.get("/search", async (req, res) => {
  const { address } = req.query;
  try {
    const data = await studentModel.findAll({
      where: {
        address: {
          [Op.like]: "%Kalyanpur%",
        },
      },
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

// Insert into table
router.post("/add", async (req, res) => {
  const { id, name, roll, address } = req.body;
  try {
    const data = await studentModel.create({
      id: id,
      name: name,
      roll: roll,
      address: address,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await studentModel.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  const { name, roll, address } = req.body;
  const { id } = req.params;
  const data = await studentModel.update(
    { name, roll, address },
    { where: { id: id } }
  );
  res.status(200).send(data);
});

export default router;
