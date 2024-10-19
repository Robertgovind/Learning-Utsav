import express from "express";
import connection from "./config/connection.js";
import router from "./routes/customer.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/customers", router);

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
  try {
    connection.connect();
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
});
