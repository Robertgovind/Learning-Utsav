import { where } from "sequelize";
import bookModel from "../models/bookModel.js";

export default class BookController {
  async addBook(req, res, imageName) {
    try {
      const data = await bookModel.create({ ...req.body, image: imageName });
      console.log(data);
      if (data) {
        res.status(201).send(data);
      } else {
        res.send(400).send({ message: "error during addition of new book" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getBookById(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.findByPk(id);
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400).send({ message: "empty data" });
      }
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }

  async updateBook(req, res) {
    const { id } = req.params;
    const data = await bookModel.update(req.body, {
      where: {
        id: id,
      },
    });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    const data = await bookModel.update({
      where: {
        id: id,
      },
    });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }
}
