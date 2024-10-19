import express from "express";
import connection from "./config/connection.js";
import router from "./routes/student.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/students", router);

app.listen(PORT, async () => {
  console.log(`server is running on port : ${PORT}`);
  try {
    await connection.authenticate();
    //connection.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
