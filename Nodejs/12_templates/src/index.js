import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about", {
    teams: [
      "Govind Kr yadav",
      "Dhiraj Chaurasiya",
      "Prabin Thapa",
      "Utkarsha Gupta",
    ],
  });
});
app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
