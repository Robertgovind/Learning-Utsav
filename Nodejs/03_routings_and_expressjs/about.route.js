import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("About page");
});
router.get("/author", (req, res) => {
  res.status(200).send("About page for author");
});
router.get("/team", (req, res) => {
  res.status(200).json({
    member1: "Govind kr yadav",
    member2: "Dhiraj Chaurasiya",
    member3: "Prabin Thapa",
    member4: "Utkarhsa Gupta",
  });
});

export default router;
