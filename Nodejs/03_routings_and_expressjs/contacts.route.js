import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Contacts page");
});
router.get("/facebook", (req, res) => {
  res.status(200).send("Facebook contacts");
});
router.get("/linkedin", (req, res) => {
  res.status(200).send("Linkedin contacts page");
});
router.get("/github", (req, res) => {
  res.status(200).send("Github contacts page");
});
router.get("/instagram", (req, res) => {
  res.status(200).send("Instagram contacts page");
});

export default router;
