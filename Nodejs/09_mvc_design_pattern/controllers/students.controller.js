import studentModel from "../models/studentModel.js";
import { Op } from "sequelize";

export default class StudentController {
  async getStudents(req, res) {
    try {
      const data = await studentModel.findAll();
      console.log(data);
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
    }
  }

  async getStudentsByName(req, res) {
    const { name } = req.query;
    try {
      const data = await studentModel.findAll({
        where: {
          name: {
            [Op.like]: `${name}%`,
          },
        },
      });
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
    }
  }

  async addStudent(req, res) {
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
  }

  async deleteStudent(req, res) {
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
  }

  async updateStudent(req, res) {
    const { name, roll, address } = req.body;
    const { id } = req.params;
    const data = await studentModel.update(
      { name, roll, address },
      { where: { id: id } }
    );
    res.status(200).send(data);
  }
}
