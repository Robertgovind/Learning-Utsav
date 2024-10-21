import express from "express";
import connection from "./models/index.js";
import bookRoute from "./routes/bookRoute.js";

const app = express();
app.use(express.json()); // for json data
app.use(express.urlencoded({ extended: false })); // for url form data
const PORT = process.env.PORT || 3000;

app.use("/books", bookRoute);

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
  try {
    await connection.authenticate();
    // connection.sync(); // creates table automatically
    console.log("successfully connected");
  } catch (err) {
    console.log(err);
  }
});
