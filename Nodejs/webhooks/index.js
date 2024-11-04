import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webhook server is running");
});

app.post("/webhook", (req, res) => {
  try {
    const { event, payload } = req.body;
    switch (event) {
      case "user_signup":
        console.log("New user signup:", payload);
        break;
      case "order_placed":
        console.log("Order placed:", payload);
        break;
      case "forget_password":
        break;
      default:
        console.log("Unhandled event:", event);
    }
    console.log(event, payload);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:3000`);
});
