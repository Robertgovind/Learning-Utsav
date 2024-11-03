import express from "express";
import router from "./routes/urlRoutes.js";
import connection from "./controllers/dbConnection.js";
import urlModel from "./model/urlModel.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/url", router);
app.get("/:shortid", async (req, res) => {
  const shordId = req.params.shortid;
  const response = await urlModel.findOneAndUpdate(
    { shortId: shordId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(response.redirectURL);
});

app.listen(PORT, () => {
  console.log(`sever is running on port : ${PORT}`);
  connection();
});
