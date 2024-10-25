import bookModel from "../models/bookModel.js";
import { Op } from "sequelize";

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
      return res.json({ success: false, message: err });
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

  async searchBook(req, res) {
    const { q } = req.query;
    if (q) {
      const data = await bookModel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${q}%`,
            },
            author: {
              [Op.like]: `%${q}%`,
            },
          },
        },
        raw: true,
      });
      for (let d of data) {
        d.image = "http://localhost:3000/uploads/" + d.image;
      }
      res.status(200).send(data);
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }
  async getBookList(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 20;

    const data = await bookModel.findAll({ limit: parseInt(limit), raw: true });
    for (let d of data) {
      d.image = "http://localhost:3000/uploads/" + d.image;
    }
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    const data = await bookModel.destroy({
      where: {
        id: id,
      },
    });
    if (data) {
      res.sendStatus(200).send({ message: "Book deleted" });
    } else {
      res.status(400).send({ message: "unsuccessful" });
    }
  }
}
